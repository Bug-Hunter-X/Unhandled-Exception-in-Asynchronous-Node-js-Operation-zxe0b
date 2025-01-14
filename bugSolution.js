```javascript
const fs = require('fs');

function readFileAsync(filePath) {
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

async function processFiles() {
  try {
    const fileContent = await readFileAsync('./my_large_file.txt');
    // Process the file content...
    console.log('File processed successfully!');
  } catch (error) {
    try {
      console.error('Error processing file:', error);
    } catch (error) {
      console.error('Fatal Error: Failed to handle error. ', error)
    }
  }
}

processFiles();
```