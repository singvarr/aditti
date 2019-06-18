module.exports = {
    "parser": "@typescript-eslint/parser",
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "plugins": ["@typescript-eslint"],
    "rules": {
        "camelcase": "error",
        "max-len": "error",
        "indent": ["error"],
        "quotes": "error",
        "object-curly-spacing": ["error", "always"],
        "eol-last": "error",
        "comma-dangle": "error",
        "no-trailing-spaces": "error",
        "default-case": "error",
        "no-var": "error",
        "semi": "error",
        "no-useless-computed-key": "error",
        "@typescript-eslint/no-var-requires": "off"
    },
    "env": {
        "es6": true,
        "node": true
    }
};
