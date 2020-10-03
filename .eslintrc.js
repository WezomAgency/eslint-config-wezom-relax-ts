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
		'@typescript-eslint/explicit-module-boundary-types': 0,
		'@typescript-eslint/naming-convention': [
			2,
			{
				selector: 'property',
				modifiers: ['private'],
				format: ['camelCase'],
				leadingUnderscore: 'require'
			},
			{
				selector: 'parameterProperty',
				format: ['camelCase']
			},
			{
				selector: 'parameterProperty',
				modifiers: ['private'],
				format: ['camelCase'],
				leadingUnderscore: 'require'
			},
			{
				selector: 'method',
				format: ['camelCase']
			},
			{
				selector: 'method',
				modifiers: ['private'],
				format: ['camelCase'],
				leadingUnderscore: 'require'
			},
			{
				selector: 'accessor',
				format: ['camelCase']
			},
			{
				selector: 'accessor',
				modifiers: ['private'],
				format: ['camelCase'],
				leadingUnderscore: 'require'
			},
			{
				selector: 'enumMember',
				format: ['PascalCase']
			},
			{
				selector: 'variable',
				format: ['camelCase', 'UPPER_CASE', 'PascalCase']
			},
			{
				selector: 'function',
				format: ['camelCase', 'PascalCase']
			},
			{
				selector: 'parameter',
				format: ['camelCase', 'PascalCase']
			},
			{
				selector: 'class',
				format: ['PascalCase']
			},
			{
				selector: 'class',
				modifiers: ['abstract'],
				format: ['PascalCase'],
				custom: {
					regex: '^Abstract[A-Z]',
					match: true
				}
			},
			{
				selector: 'interface',
				format: ['PascalCase'],
				prefix: ['I']
			},
			{
				selector: 'typeAlias',
				format: ['PascalCase'],
				prefix: ['T']
			},
			{
				selector: 'typeParameter',
				format: ['PascalCase'],
				prefix: ['G']
			},
			{
				selector: 'enum',
				format: ['PascalCase'],
				custom: {
					regex: '[a-z]List$',
					match: true
				}
			}
		],
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
