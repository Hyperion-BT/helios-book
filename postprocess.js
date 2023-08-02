// this only runs when building!
import * as fs from "fs"
import * as path from "path"

function correctDir() {
	process.chdir(path.dirname(process.argv[1]));
}

/**
 * @param {string} dir 
 * @param {string} ext 
 * @returns {Promise<string[]>}
 */
async function listFiles(dir, ext) {
    const entries = await fs.promises.readdir(dir, { withFileTypes: true })

    const files = await Promise.all(entries.map((entry) => {
        const res = path.resolve(dir, entry.name)

        if (entry.isDirectory()) {
            if (entry.name.endsWith("node_modules")) {
                return []
            } else {
                return listFiles(res, ext)
            }
        } else {
            return res
        }
    }))

    return files.flat().filter(name => name.endsWith(ext))
}

//const RE = /<strong aria-hidden="true">[0-9]+\.[0-9]+\.[0-9]+\.<\/strong>/g

//const RE = /<\/strong>/mg

const RE = /<strong\b[^>]*>([0-9]+\.){3,}<\/strong>/g

async function main() {
    correctDir()

    const htmlFiles = await listFiles(path.join(process.cwd(), "book"), ".html")

    await Promise.all(htmlFiles.map(f => {
        /**
         * @type {Promise<void>}
         */
        const promise = new Promise((resolve, reject) => {
            fs.readFile(f, (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    let src = data.toString()

                    src = src.replace(RE, "")

                    fs.writeFile(f, src, (err) => {
                        if (err) {
                            reject(err)
                        } else {
                            resolve()
                        }
                    })
                }
            })
        })

        return promise
    }))
}

main()
