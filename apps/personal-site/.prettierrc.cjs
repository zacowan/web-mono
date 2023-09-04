module.exports = {
	...require('@zacowan/prettier-config'),
	plugins: ['prettier-plugin-svelte'],
	overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }]
};
