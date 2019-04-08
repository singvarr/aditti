module.exports = {
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
            "<rootDir>/config/__mocks__/fileMock.ts",
        "\\.(css|less)$": "<rootDir>/config/__mocks__/styleMock.ts"
    },
    modulePaths: ["<rootDir>/frontend/", "<rootDir>/frontend/store"],
    setupFilesAfterEnv: ["<rootDir>/config/setupTests.ts"],
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(ts|tsx)?$",
    testEnvironment: "node",
    verbose: true
};
