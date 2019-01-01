const fetch = require("node-fetch");

module.exports = {
    globals: { fetch },
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
            "<rootDir>/config/__mocks__/fileMock.js",
        "\\.(css|less)$": "<rootDir>/config/__mocks__/styleMock.js"
    },
    modulePaths: ["<rootDir>/src/", "<rootDir>/src/store"],
    setupTestFrameworkScriptFile: "<rootDir>/config/setupTests.js",
    testEnvironment: "node",
    verbose: true
};
