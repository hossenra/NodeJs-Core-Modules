const path = require("path");

console.log("Current files Info: \n");
console.log("fileName: ", __filename);
console.log("dirName: ", __dirname);

console.log("\n" + "-".repeat(50) + "\n");

const filePath = "/razibul/documents/nextLevel.pdf";

console.log("analyzing Path: ", filePath, "\n");
console.log("dirName: ", path.dirname(filePath));
console.log("BaseName: ", path.basename(filePath));
console.log("File Extension: ", path.extname(filePath));
console.log("File Name: ", path.basename(filePath, path.extname(filePath)));

console.log("\n" + "-".repeat(50) + "\n");

const parsed = path.parse(filePath);
console.log("Parsed path object: ", parsed);

console.log("\n" + "-".repeat(50) + "\n");

console.log("formatted Path: ", path.format(parsed));
