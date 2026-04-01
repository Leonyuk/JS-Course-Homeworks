const path = require("path");

module.exports = {
  mode: "development",
  entry: "./Lesson/src/index.js",
  output: {
    path: path.resolve(__dirname, "Lesson/dist"),
    filename: "main.js",
  },
};
