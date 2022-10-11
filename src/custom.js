// highlighting of helios code blocks
hljs.registerLanguage('helios', function(hljs) {
	let KEYWORDS = {
		className: 'keyword',
		begin: '[\\s]*\\b(func|const|struct|enum|spending|minting|staking|testing|if|else|switch|print)\\b'
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
		begin: '#[a-fA-F0-9]*\\b',
	}

	let VARIABLE = {
		className: 'variable',
		begin: '\\b(self)',
	}

	let STRINGS = {
		className: 'string',
		begin: '"', end: '"',
		illegal: '\\n',
		contains: [ hljs.BACKSLASH_ESCAPE ],
		relevance: 0
	};

	let INLINE_COMMENT = hljs.COMMENT('//', '[^\\\\]$');
	let INLINE_COMMENT_OLD = hljs.COMMENT('`', '[^\\\\]$');

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
		]
	};

	return config;
});


document.addEventListener('DOMContentLoaded', (event) => {
	document.querySelectorAll('pre code.language-helios').forEach((el) => {
		hljs.highlightBlock(el);
	});
});