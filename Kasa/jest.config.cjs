module.exports = {
  testEnvironment: "jsdom",

  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },

  setupFiles: ["<rootDir>/jest.setup.js"],

  moduleNameMapper: {
    "\\.(css|less|scss)$": "identity-obj-proxy",
  },
};