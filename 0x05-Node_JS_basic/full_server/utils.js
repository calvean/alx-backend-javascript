import fs from 'fs';

const readDatabase = (filePath) => new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf8', (error, data) => {
    if (error) {
      reject(error);
    } else {
      const students = {
        CS: [],
        SWE: [],
      };
      const lines = data.trim().split('\n');
      for (const line of lines) {
        const [firstName, field] = line.split(',');
        if (firstName && field) {
          students[field.trim()].push(firstName.trim());
        }
      }
      resolve(students);
    }
  });
});

export default readDatabase;
