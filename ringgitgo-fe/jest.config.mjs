import nextJest from "next/jest.js";

const createJestConfig = nextJest({ dir: "./" });

/** @type {import("jest").Config} */
const config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testMatch: ["<rootDir>/**/*.test.[jt]s?(x)"],
  testPathIgnorePatterns: ["<rootDir>/e2e/"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  },
};

export default createJestConfig(config);
