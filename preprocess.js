"strict"

import * as fs from "fs"
import * as child_process from "child_process"
import * as process from "process"
import * as path from "path"
import { AstBuilder } from "@jsdoc/ast"

const DEBUG_PATH = "./debug-inject-lib-docs.log"

function correctDir() {
	process.chdir(path.dirname(process.argv[1]));
}

/**
 * @param {boolean} cond 
 * @param {string} msg 
 */
function assert(cond, msg = "unexpected") {
    if (!cond) {
        throw new Error(msg)
    }
}

/**
 * @param {any} msg 
 */
function debug(msg) {
    fs.appendFileSync(DEBUG_PATH, "\n" + msg.toString())
}

function readStdin() {
    process.stdin.resume();
    process.stdin.setEncoding("utf8");
    
    const chunks = [];
    
    return new Promise((resolve, reject) => {
        process.stdin.on("data", (chunk) => {
            chunks.push(chunk)
        })
        
        process.stdin.on("end", () => {
            const raw = chunks.join("")

            resolve(JSON.parse(raw))
        })
    })
}

/**
 * @template T
 */
class Node {
    #node

    /**
     * @param {any} node 
     */
    constructor(node) {
        if (!node) {
            throw new Error("invalid book node")
        }

        this.#node = node
    }

    /**
     * @type {T}
     */
    get node() {
        return this.#node
    }
}

/**
 * @typedef {{
 *   name: string
 *   content: string
 *   number: null | number[]
 *   sub_items: WrappedSectionNode[]
 *   path: string
 *   source_path: string 
 *   parent_names: string[]
 * }} SectionNode
 */

/**
 * @typedef {{
 *   name: string
 *   content: string
 *   number?: null | number[]
 *   sub_items?: WrappedSectionNode[]
 *   path: string
 *   source_path?: string
 *   parent_names?: string[]
 * }} IncompleteSectionNode
 */

/**
 * @typedef {{
 *   Chapter: SectionNode
 * }} WrappedSectionNode
 */

/**
 * @typedef {{
 *   sections: WrappedSectionNode[]
 * }} BookNode
 */

/**
 * @extends {Node<BookNode>}
 */
class Book extends Node {
    /**
     * @param {string} name 
     * @returns {Section}
     */
    section(name) {
        const childNode = this.node.sections.find(s => s.Chapter.name == name)

        if (!childNode) {
            throw new Error(`section ${name} not found`)
        }

        return new Section(childNode)
    }

    /**
     * @param {(section: SectionNode) => void} fn
     */
    loop(fn) {
        const stack = this.node.sections.slice()

        while (true) {
            const s = stack.pop()?.Chapter

            if (!s) {
                break
            }

            fn(s)

            s.sub_items.forEach(item => stack.push(item))
        }
    }

    injectBreadCrumbs() {
        this.loop(s => {
            const n = s.parent_names.length + (s.path.endsWith("index.md") ? 1 : 0)

            if (n > 0) {
                s.content = s.parent_names.map((p, i) => {
                    return `[${p}](${new Array(n).fill("../").join("")}${s.path.split("/").slice(0, i+1).join("/") + "/index.md"})/`
                }).join(" ") + "\n" + s.content
            }
        })
    }
}

/**
 * @extends {Node<WrappedSectionNode>}
 */
class Section extends Node {
    /**
     * @param {WrappedSectionNode} node
     */
    constructor(node) {
        super(node)
    }

    /**
     * @param {string} name 
     * @returns {Section}
     */
    section(name) {
        const childNode = this.node.Chapter.sub_items.find(s => s.Chapter.name == name)

        if (!childNode) {
            throw new Error(`subsection ${name} not found`)
        }

        return new Section(childNode)
    }

    /**
     * @param {IncompleteSectionNode | Section} node
     * @returns {Section}
     */
    appendChild(node) {
        const section = node instanceof Section ?
            node :
            new Section({
                Chapter: {
                    name: node.name,
                    content: node.content,
                    number: node?.number ?? this.node.Chapter.number?.slice().concat([this.node.Chapter.sub_items.length+1]) ?? null,
                    sub_items: node?.sub_items ?? [],
                    path: node.path,
                    source_path: node?.source_path ?? node.path,
                    parent_names: node?.parent_names ?? this.node.Chapter.parent_names.slice().concat([this.node.Chapter.name])
                }
            })

        this.node.Chapter.sub_items.push(section.node)

        return this
    }

    /**
     * @type {Section}
     */
    get lastChild() {
        const childNode = this.node.Chapter.sub_items.slice().pop()

        if (childNode) {
            return new Section(childNode)
        } else {
            throw new Error("doesn't have a child")
        }
    }
}

/**
 * @param {string} src 
 * @returns {string}
 */
function removeHbars(src) {
    const lines = src.split("\n")

    return lines.map(l => l.trim() == "___" ? '<div class="vspace"></div>' : l).join("\n")
}

/**
 * @param {string} src 
 * @returns {string}
 */
function makeTocCollapsible(src) {
    const lines = src.split("\n")

    const start = lines.findIndex(l => l == "## Table of contents")
    const end = lines.findIndex((l, i) => i> start && l.startsWith("## "))

    if (start == -1 || end == -1) {
        return src
    }

    const parts = [`<h2 id="table-of-contents"><a class="header" href='javascript:(() => {
        document.getElementById("table-of-contents").setAttribute("expanded", "");
        window.location.hash = "#table-of-contents"
    })();'>Index</a><a href='javascript:(() => {
        const h = document.getElementById("table-of-contents");
        if (h.getAttribute("expanded") == "") {
            h.removeAttribute("expanded")
        } else {
            h.setAttribute("expanded", "")
        }
    })();'></a></h2><div class="toc">`]
    
    /**
     * @type {null | string}
     */
    let section = null

    for (let i = start + 1; i < end; i++) {
        const l = lines[i]

        if (l.startsWith("### ")) {
            if (section) {
                parts.push("</ul>")
            }

            section = l.slice(4)

            parts.push(`<h3 id="${section.toLowerCase()}"><a class="header" href="#${section.toLowerCase()}">${section}</a></h3>`)
            parts.push('<ul class="toc">')
        } else if (section && l.trim().startsWith("- ")) {
            const name = l.split("[")[1].split("]")[0].replace(/[\\][_]/g, "_")
            const link = l.split("(")[1].split(")")[0]

            parts.push(`<li><a href="${link}">${name}</a></li>`)
        }
    }

    if (section) {
        parts.push("</ul>")
    }

    parts.push("</div>\n")

    return lines.slice(0, start).concat([parts.join("")]).concat(lines.slice(end)).join("\n")
}

/**
 * @param {string} src 
 * @returns {string}
 */
function cleanTitle(src) {
    const lines = src.split("\n")

    const m = lines[0]?.match(/^#\s*(Class|Namespace|Interface):(.*$)/)

    if (m) {
        lines[0] = `# ${m[2]}`
    }

    return lines.join("\n")
}

class ApiDoclet {
    #name
    #src

    /**
     * @param {string} name 
     * @param {string} src 
     */
    constructor(name, src) {
        this.#name = name.replace(/[\\][_]/g, "_")

        if (this.#name.includes("\\_")) {
            throw new Error("invalid name " + this.#name)
        }

        this.#src = cleanTitle(makeTocCollapsible(removeHbars(src)))
    }

    get name() {
        return this.#name
    }

    get src() {
        return this.#src
    }

    /**
     * 
     * @param {string} basePath 
     * @returns {IncompleteSectionNode}
     */
    toIncompleteSectionNode(basePath) {
        return {
            name: this.#name.split(".")[0],
            content: this.#src,
            path: `${basePath}/${this.#name}.md`
        }
    }
}

async function generateApiDocs() {
    const cwd = process.cwd()

    const repoDir = path.join(cwd, "node_modules/@hyperionbt/helios")

    process.chdir(repoDir)

    fs.writeFileSync(path.join(repoDir, "tsconfig.json"), `{
    "include": ["helios.d.ts"],
    "compilerOptions": {
        "target": "es2020",
        "allowJs": true,
        "declaration": true,
        "emitDeclarationOnly": true,
        "declarationMap": false,
        "skipLibCheck": true
    }
}`)

    debug(child_process.execSync("npx typedoc --plugin typedoc-plugin-markdown --excludePrivate --hideBreadcrumbs --disableSources --out docs ./helios.d.ts"))

    process.chdir(cwd)
}

/**
 * 
 * @param {string} dir 
 * @returns {Promise<ApiDoclet[]>}
 */
async function collectDirApiDoclets(dir) {
    if (!fs.existsSync(dir)) {
        return []
    }

    const files = fs.readdirSync(dir)

    return await Promise.all(files.map(f => {
        return new Promise((resolve, reject) => {
            fs.readFile(path.join(dir, f), (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(new ApiDoclet(f.split(".")[0], data.toString()))
                }
            })
        })
    }))
}

/**
 * @param {string} filePath 
 * @param {string} section 
 * @returns {Promise<ApiDoclet[]>}
 */
async function collectFileApiDoclets(filePath, section) {
    const src = fs.readFileSync(filePath).toString()

    const lines = src.split("\n")

    /**
     * @type {ApiDoclet[]}
     */
    const doclets = []

    let insideSection = false
    let subSectionName = ""
    let subSectionStart = -1

    lines.forEach((l, i) => {
        if (!insideSection) {
            if (l.startsWith(`## ${section}`)) {
                insideSection = true
            }
        } else {
            if (l.startsWith(`## `)) {
                insideSection = false

                if (subSectionName && subSectionStart != -1) {
                    doclets.push(new ApiDoclet(subSectionName, lines.slice(subSectionStart, i).join("\n")))
                }

                subSectionName = ""
                subSectionStart = -1
            } else if (l.startsWith(`### `)) {
                if (subSectionName && subSectionStart != -1) {
                    doclets.push(new ApiDoclet(subSectionName, lines.slice(subSectionStart, i).join("\n")))
                }

                const m = l.match(/^###\s*([a-zA-Z_][a-z\\0-9A-Z_]*)/m)

                if (!m) {
                    throw new Error("bad subsection heading")
                }

                subSectionName = m[1]
                subSectionStart = i
            }
        }
    })

	if (subSectionName && subSectionStart != -1) {
		doclets.push(new ApiDoclet(subSectionName, lines.slice(subSectionStart).join("\n")))
	}

    return doclets
}

class ApiSection {
    #name
    #doclets

    /**
     * @param {string} name 
     * @param {ApiDoclet[]} doclets 
     */
    constructor(name, doclets) {
        this.#name = name
        this.#doclets = doclets
    }

    /**
     * 
     * @param {string} name 
     * @param {string} basePath 
     * @param {string} relPath
     * @returns {Promise<ApiSection>}
     */
    static async init(name, basePath, relPath) {
        const doclets = await collectDirApiDoclets(path.join(basePath, relPath))

        return new ApiSection(name, doclets)
    }

    toIndex() {
        if (this.#doclets.length == 0) {
            return ""
        }

        return `# ${this.#name}

<ul class="toc ${this.#name.toLowerCase()}">${this.#doclets.map(d => {
        const link = `./${d.name}.md`

        return `<li><a href="${link}">${d.name}</a></li>`
    }).join("")}</ul>
`
    }

    toSubIndex() {
        if (this.#doclets.length == 0) {
            return ""
        }

        return `### ${this.#name}
        
<ul class="toc ${this.#name.toLowerCase()}">${this.#doclets.map(d => {
            const link = `./${this.#name.toLowerCase()}/${d.name}.md`

            return `<li><a href="${link}">${d.name}</a></li>`
        }).join("")}</ul>

`
    }

    /**
     * @param {Section} node 
     */
    inject(node) {
        if (this.#doclets.length == 0) {
            return
        }

        const subSection = node.appendChild({
            name: this.#name,
            content: this.toIndex(),
            path: `api/reference/${this.#name.toLowerCase()}/index.md`
        }).lastChild

        this.#doclets.forEach(s => subSection.appendChild(s.toIncompleteSectionNode(`api/reference/${this.#name.toLowerCase()}`)))
    }
}

class ApiSingleSection {
    #name
    #doclets

    /**
     * @param {string} name 
     * @param {ApiDoclet[]} doclets 
     */
    constructor(name, doclets) {
        this.#name = name
        this.#doclets = doclets
    }

    /**
     * 
     * @param {string} name 
     * @param {string} section
     * @param {string} filePath 
     * @returns {Promise<ApiSingleSection>}
     */
    static async init(name, section, filePath) {
        const doclets = await collectFileApiDoclets(filePath, section)

        return new ApiSingleSection(name, doclets)
    }

    toSubIndex() {
        if (this.#doclets.length == 0) {
            return ""
        }

        return `### ${this.#name}
        
<ul class="toc ${this.#name.toLowerCase()}">${this.#doclets.map(d => {
            const link = `./${this.#name.toLowerCase()}.md#${d.name.toLowerCase()}`

            return `<li><a href="${link}">${d.name}</a></li>`
        }).join("")}</ul>

`
    }

    /**
     * @returns {string}
     */
    toIndex() {
        return `# ${this.#name}
        
<ul class="toc ${this.#name.toLowerCase()}">${this.#doclets.map(d => {
    const link = `#${d.name.toLowerCase()}`

    return `<li><a href="${link}">${d.name}</a></li>`
}).join("")}</ul>
        

${this.#doclets.map(d => d.src).join("\n")}`
    }

    /**
     * @param {Section} node 
     */
    inject(node) {
        if (this.#doclets.length == 0) {
            return 
        }

        node.appendChild({
            name: this.#name,
            content: this.toIndex(),
            path: `api/reference/${this.#name.toLowerCase()}.md`
        })
    }

    /**
     * @param {string} name 
     * @returns {undefined | ApiDoclet}
     */
    findDoclet(name) {
        return this.#doclets.find(d => d.name.toLowerCase() == name.toLowerCase())
    }
    
    /**
     * @param {string} name 
     * @returns {null | string}
     */
    resolve(name) {
        const d = this.findDoclet(name)

        if (d) {
            return `${this.#name.toLowerCase()}.md#${d.name.toLowerCase()}`
        } else {
            return null
        }
    }
}

class ApiDocs {
    #classes
    #functions
    #interfaces
    #namespaces
    #types
    #variables

    /**
     * @param {ApiSection} classes 
     * @param {ApiSingleSection} functions 
     * @param {ApiSection} interfaces
     * @param {ApiSection} namespaces
     * @param {ApiSingleSection} types 
     * @param {ApiSingleSection} variables
     */
    constructor(classes, functions, interfaces, namespaces, types, variables) {
        this.#classes = classes
        this.#functions = functions
        this.#interfaces = interfaces
        this.#namespaces = namespaces
        this.#types = types
        this.#variables = variables
    }

    static async init() {
        const cwd = process.cwd()

        const basePath = path.join(cwd, "node_modules/@hyperionbt/helios/docs")
        const index = path.join(basePath, "modules.md")

        return new ApiDocs(
            await ApiSection.init("Classes", basePath, "classes"),
            await ApiSingleSection.init("Functions", "Functions", index),
            await ApiSection.init("Interfaces", basePath, "interfaces"),
            await ApiSection.init("Namespaces", basePath, "modules"),
            await ApiSingleSection.init("Types", "Type Aliases", index),
            await ApiSingleSection.init("Variables", "Variables", index)
        )
    }

    get classes() {
        return this.#classes
    }

    get functions() {
        return this.#functions
    }

    get interfaces() {
        return this.#interfaces
    }

    get namespaces() {
        return this.#namespaces
    }

    get types() {
        return this.#types
    }

    get variables() {
        return this.#variables
    }

    toIndex() {
        return `## Overview
${this.#classes.toSubIndex()}${this.#functions.toSubIndex()}${this.#interfaces.toSubIndex()}${this.#types.toSubIndex()}${this.#variables.toSubIndex()}`
    }

    /**
     * @param {string} name 
     * @returns {string}
     */
    resolve(name) {
        const l = this.#functions.resolve(name) ?? this.#types.resolve(name) ?? this.#variables.resolve(name)

        
        if (!l) {
            throw new Error("unable to resolve old link " + name)
        }

        return l
    }

    /**
     * Inject self into book
     * @param {Book} book 
     */
    inject(book) {
        const apiSection = book.section("Helios API").appendChild({
            name: "API Reference",
            content: `# API Reference
This section contains a complete reference of all the classes, functions, interfaces, types and variables exported by the Helios library.

Typescript annotations are used to document types.
    
${this.toIndex()}`,
            path: "api/reference/index.md"
        }).lastChild

        this.#classes.inject(apiSection)
        this.#functions.inject(apiSection)
        this.#interfaces.inject(apiSection)
        this.#namespaces.inject(apiSection)
        this.#types.inject(apiSection)
        this.#variables.inject(apiSection)

        book.loop(s => {
            s.content = s.content.split("modules.md#").map((p, i) => {
                if (i == 0) {
                    return p
                } else {
                    const q = p.split(")")

                    q[0] = this.resolve(q[0])

                    return q.join(")")
                }
            }).join("")
        })
    }
}

/**
 * @param {Book} book 
 */
async function injectApiDocs(book) {
    const docs = await ApiDocs.init()

    docs.inject(book)
}

/**
 * @param {string} name 
 * @returns {string}
 */
function slugify(name) {
    return name.toLowerCase()    
}

async function main() {
    correctDir()

    fs.rmSync(DEBUG_PATH, {force: true})

    debug(process.argv)

    if (process.argv[process.argv.length-2] == "supports") {
        process.exit(0)
        return
    }

    const [context, bookNode] = await readStdin()

    debug(JSON.stringify(bookNode, undefined, 4))

    await generateApiDocs()

    const book = new Book(bookNode)

    await injectApiDocs(book)

    book.injectBreadCrumbs()

    debug(JSON.stringify(bookNode, undefined, 4))

    console.log(JSON.stringify(bookNode))
}

main()
