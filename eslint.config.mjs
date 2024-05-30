import globals from 'globals'
import pluginJs from '@eslint/js'
import prettier from 'eslint-config-prettier'

export default [
    {
        languageOptions: {
            globals: globals.browser,
        },
    },
    pluginJs.configs.recommended,
    prettier,
]
