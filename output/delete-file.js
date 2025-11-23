const fs = require("fs");

fs.writeFileSync("./output/tamp.txt", "this is a temp file");
console.log("temp file created");

if (fs.existsSync("../output/tamp.txt")) {
  console.log("File exists!!!");

  fs.unlinkSync("../output/temp.txt");
  console.log("file deleted");
}

try {
  fs.unlinkSync("../output/tamp.txt");
} catch (error) {
  console.log("Error: ", error.message);
}

fs.writeFile("./output/temp2.txt", "Another temp file", (err) => {
  if (err) return console.error(err.message);

  console.log("Another temp file created");

  fs.unlink("../output/tamp2.txt", (err) => {
    if (err) {
      console.error("Error: ", err.message);
    } else {
      console.log("Temp2 deleted");
    }
  });
});
