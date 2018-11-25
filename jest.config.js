const fetch = require("node-fetch");

module.exports = {
    globals: { fetch },
    modulePaths: ["<rootDir>/src/", "<rootDir>/src/store"],
    testEnvironment: "node",
    verbose: true
};
