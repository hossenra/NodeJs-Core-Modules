// password
const crypto = require("crypto");

console.log("\n MD5 Hash: ");
const md5Hash = crypto.createHash("md5").update("password123").digest("hex");
console.log("input : password123");
console.log("MD5 HashedPassword : ", md5Hash);
