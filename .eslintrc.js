module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2019
	},
	extends: ['plugin:@typescript-eslint/recommended'],
	rules: {
		'@typescript-eslint/camelcase': 0,
		'@typescript-eslint/explicit-function-return-type': 0,
		'@typescript-eslint/no-empty-interface': 0,
		'@typescript-eslint/no-explicit-any': 0,
		'@typescript-eslint/no-var-requires': 0,
		'@typescript-eslint/no-unused-vars': [
			2,
			{
				vars: 'all',
				args: 'none',
				caughtErrors: 'all'
			}
		],
		indent: [
			2,
			'tab',
			{
				SwitchCase: 1
			}
		],
		'no-extra-boolean-cast': 0,
		'no-sequences': 2,
		'no-tabs': 0,
		'no-unused-vars': 0,
		semi: [2, 'always']
	}
};
