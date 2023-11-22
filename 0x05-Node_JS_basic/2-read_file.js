const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.trim().split('\n');

    if (lines.length === 0) {
      throw new Error('Cannot load the database');
    }

    const fields = new Map();

    for (const student of lines.slice(1)) {
      // eslint-disable-next-line no-unused-vars
      const [fname, lname, age, field] = student.split(',').map((item) => item.trim());

      if (field === '') {
        // eslint-disable-next-line no-continue
        continue;
      }

      const fieldData = fields.get(field) || { count: 0, students: [] };
      // eslint-disable-next-line no-plusplus
      fieldData.count++;
      fieldData.students.push(fname);
      fields.set(field, fieldData);
    }

    console.log(`Number of students: ${lines.length - 1}`);

    for (const [field, { count, students }] of fields) {
      console.log(`Number of students in ${field}: ${count}. List: ${students.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
