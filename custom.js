// highlighting of helios code blocks
hljs.registerLanguage('helios', function(hljs) {
	let KEYWORDS = {
		className: 'keyword',
		begin: '[\\s]*\\b(import|func|const|struct|enum|module|spending|minting|staking|testing|if|else|switch|print|as|from|error|assert|copy)\\b'
	};

	let LITERALS = {
		className: 'literal',
		begin: '\\b(false|true)\\b',
	};

	let BUILTIN_TYPES = {
		className: 'type',
		begin: '\\b(Int|Bool|Option|Map|String|ByteArray)',
	};

	let NUMBERS = {
		className: 'number',
		begin: '(-?)(\\b0[xob][a-fA-F0-9]+|(\\b[\\d]+(\\.[\\d]*)?|\\.[\\d]+)([eE][-+]?[\\d]+)?)(?!D)'
	};

	let BYTE_ARRAYS = {
		className: 'literal',
		begin: '#[a-fA-F0-9.]*',
	};

	let PARAM_TYPE = {
		className: 'param-type',
		begin: '\\b[A-Za-z]*Type\\b',
	};

	let VARIABLE = {
		className: 'variable',
		begin: '\\b(self)',
	};

	let STRINGS = {
		className: 'string',
		begin: '"', end: '"',
		illegal: '\\n',
		contains: [ hljs.BACKSLASH_ESCAPE ],
		relevance: 0
	};

	let INLINE_COMMENT = hljs.COMMENT('//', '[^\\\\]$');

	var config = {
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
			VARIABLE,
			PARAM_TYPE,
		]
	};

	return config;
});


document.addEventListener('DOMContentLoaded', (event) => {
	document.querySelectorAll('pre code.language-helios').forEach((el) => {
		hljs.highlightBlock(el);
	});
});
