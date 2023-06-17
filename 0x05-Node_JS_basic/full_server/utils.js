// utils.js
import fs from 'fs';

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }

      const content = data.split('\n');

      const students = content
        .filter((item) => item)
        .map((item) => item.split(',')[0]);

      const fields = {};
      for (const student of students) {
        const field = student.split(',')[3];
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(student.split(',')[0]);
      }

      resolve(fields);
    });
  });
}

export default readDatabase;
