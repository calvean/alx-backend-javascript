// utils.js
import fs from 'fs/promises';

async function readDatabase(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const content = data.split('\n');

    const students = content
      .filter((item) => item)
      .map((item) => item.split(','));

    const fields = students.reduce((acc, student, i) => {
      if (i !== 0) {
        if (!acc[student[3]]) acc[student[3]] = [];
        acc[student[3]].push(student[0]);
      }
      return acc;
    }, {});

    delete fields.field;

    return fields;
  } catch (error) {
    throw new Error(error);
  }
}

export default readDatabase;
