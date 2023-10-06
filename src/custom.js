// highlighting of helios code blocks
hljs.registerLanguage('helios', function(hljs) {
	const KEYWORDS = {
		className: 'keyword',
		begin: '[\\s]*\\b(import|func|const|struct|enum|module|spending|minting|staking|testing|if|else|switch|print|as|from|error|assert|copy)\\b'
	}

	const LITERALS = {
		className: 'literal',
		begin: '\\b(false|true)\\b',
	}

	const BUILTIN_TYPES = {
		className: 'type',
		begin: '\\b(Int|Bool|Option|Map|String|ByteArray|Real)',
	}

	const NUMBERS = {
		className: 'number',
		begin: '(-?)(\\b0[xob][a-fA-F0-9]+|(\\b[\\d][\\d_]*(\\.[\\d_]*)?|\\.[\\d_]+)([eE][-+]?[\\d]+)?)(?!D)'
	}

	const BYTE_ARRAYS = {
		className: 'literal',
		begin: '#[a-fA-F0-9.]*',
	}

	const UTF8_BYTE_ARRAYS = {
		className: 'literal',
		begin: 'b"', end: '"',
		illegal: '\\n',
		contains: [ hljs.BACKSLASH_ESCAPE ],
		relevance: 0
	}

	const PARAM_TYPE = {
		className: 'param-type',
		begin: '\\b[A-Za-z]*Type\\b',
	}

	const VARIABLE = {
		className: 'variable',
		begin: '\\b(self)',
	}

	const STRINGS = {
		className: 'string',
		begin: '"', end: '"',
		illegal: '\\n',
		contains: [ hljs.BACKSLASH_ESCAPE ],
		relevance: 0
	}

	const INLINE_COMMENT = hljs.COMMENT('//', '[^\\\\]$')

	const config = {
		aliases: [ '4d' ],
		keyword:KEYWORDS,
		contains: [
			INLINE_COMMENT, // single-line comments
			hljs.C_BLOCK_COMMENT_MODE, // comment blocks
			KEYWORDS,
			STRINGS,
			NUMBERS,
			LITERALS,
			BUILTIN_TYPES,
			BYTE_ARRAYS,
			UTF8_BYTE_ARRAYS,
			VARIABLE,
			PARAM_TYPE,
		]
	}

	return config
})


document.addEventListener('DOMContentLoaded', (event) => {
	document.querySelectorAll('pre code.language-helios').forEach((el) => {
		hljs.highlightBlock(el)
	})

	document.querySelectorAll('strong[aria-hidden="true"]').forEach((el) => {
		if (el.innerHTML.split(".").length > 3) {
			el.parentNode?.removeChild(el)
		}
	})

	const active = document.getElementById(window.location.hash?.slice(1) ?? "")

	if (active && active.tagName.toLowerCase() == "h2") {
		active.setAttribute("expanded", "")
	}
})
