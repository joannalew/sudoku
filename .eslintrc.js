module.exports = {
    extends: [
        "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
        "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        "plugin:prettier/recommended", // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors.
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        sourceType: "module",
        ecmaVersion: 2020,
        ecmaFeatures: {
            jsx: true, // Allows for the parsing of JSX
        },
    },
    plugins: ["@typescript-eslint", "simple-import-sort", "import"],
    settings: {
        react: {
            version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
        },
    },
    // Fine tune rules
    rules: {
        "@typescript-eslint/no-var-requires": 0,
        "simple-import-sort/exports": "error",
        "simple-import-sort/imports": [
            "error",
            {
                // The default grouping, but with no blank lines.
                groups: [
                    // Packages.
                    // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
                    ["^@?\\w"],
                    // Absolute imports and other imports such as Vue-style `@/foo`.
                    // Anything not matched in another group.
                    ["^"],
                    // Relative imports.
                    // Anything that starts with a dot.
                    ["^\\."],
                    // Side effect imports.
                    ["^\\u0000"],
                ],
            },
        ],
        "import/first": "error",
        "import/newline-after-import": "error",
        "import/no-duplicates": "error"
    },
};
