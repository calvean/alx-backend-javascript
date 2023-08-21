const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n');

      if (lines.length === 0) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const students = lines.slice(1);
      const fields = {};

      for (const student of students) {
        // eslint-disable-next-line no-unused-vars
        const [fname, lname, age, field] = student.split(',').map((item) => item.trim());

        if (field === '') {
          // eslint-disable-next-line no-continue
          continue;
        }

        if (!fields[field]) {
          fields[field] = {
            count: 1,
            students: [fname],
          };
        } else {
          // eslint-disable-next-line no-plusplus
          fields[field].count++;
          fields[field].students.push(fname);
        }
      }

      console.log(`Number of students: ${students.length}`);

      for (const field of Object.keys(fields)) {
        const { count, students } = fields[field];
        console.log(`Number of students in ${field}: ${count}. List: ${students.join(', ')}`);
      }

      resolve();
    });
  });
}

module.exports = countStudents;
