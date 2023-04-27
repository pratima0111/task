const fs = require('fs');

// Replace 'path/to/directory' with the path to the directory you want to read
const directoryPath = 'C:/Users/hp/Desktop';

// Read the contents of the directory
fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.log('Error reading directory:', err);
    return;
  }

  // Loop through the files and log their names
  console.log('Files in directory:');
  files.forEach(file => {
    console.log(file);
  });
});
