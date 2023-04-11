const fs = require('fs');
const path = require('path');

// Define the path to the file we want to read
const filePath = path.join(__dirname, 'data', 'file.txt');

// Create a data folder if it doesn't exist yet
const dataFolder = path.join(__dirname, 'data');
if (!fs.existsSync(dataFolder)) {
  fs.mkdirSync(dataFolder);
}

// Create a file with some content if it doesn't exist yet
const fileContent = 'Hello,world!';
if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, fileContent);
}

// Define the function to read the file
function readFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

// Call the function to read the file and log its contents
readFile(filePath)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });
