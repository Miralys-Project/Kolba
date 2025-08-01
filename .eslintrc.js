import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';
import onlyWarn from 'eslint-plugin-only-warn';
import typescriptneon from 'eslint-config-neon/typescript';
import node from 'eslint-config-neon/node';

/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config[]}
 * */
export const config = [
	js.configs.recommended,
	eslintConfigPrettier,
	...tseslint.configs.recommended,
	typescriptneon,
	node,
	{
		plugins: {
			onlyWarn
		}
	},
	{
		ignores: ['dist/**']
	}
];
