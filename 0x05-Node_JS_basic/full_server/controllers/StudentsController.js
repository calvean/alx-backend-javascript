// StudentsController.js
import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(request, response) {
    try {
      const fields = await readDatabase('database.csv');
      const students = [];

      students.push('This is the list of our students');

      const sortedFields = Object.keys(fields).sort((a, b) =>
        a.localeCompare(b, 'en', { sensitivity: 'base' })
      );

      for (const field of sortedFields) {
        const count = fields[field].length;
        const list = fields[field].join(', ');
        students.push(`Number of students in ${field}: ${count}. List: ${list}`);
      }

      response.status(200).send(students.join('\n'));
    } catch (error) {
      response.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(request, response) {
    const { major } = request.params;

    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
    } else {
      try {
        const fields = await readDatabase('database.csv');
        const students = fields[major];
        response.status(200).send(`List: ${students.join(', ')}`);
      } catch (error) {
        response.status(500).send('Cannot load the database');
      }
    }
  }
}

export default StudentsController;
