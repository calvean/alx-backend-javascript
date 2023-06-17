// StudentsController.js
import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(request, response) {
    try {
      const fields = await readDatabase('./database.csv');
      const students = [];

      students.push('This is the list of our students');

      for (const key of Object.keys(fields)) {
        const msg = `Number of students in ${key}: ${fields[key].length}. List: ${fields[key].join(', ')}`;
        students.push(msg);
      }

      response.send(students.join('\n'));
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
        const fields = await readDatabase('./database.csv');
        const students = fields[major];
        response.send(`List: ${students.join(', ')}`);
      } catch (error) {
        response.status(500).send('Cannot load the database');
      }
    }
  }
}

export default StudentsController;
