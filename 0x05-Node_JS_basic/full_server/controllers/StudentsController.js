import { readDatabase } from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const students = await readDatabase(req.app.locals.database);
      let response = 'This is the list of our students\n';

      const fields = Object.keys(students).sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));

      for (const field of fields) {
        const fieldStudents = students[field];
        const count = fieldStudents.length;
        const studentList = fieldStudents.join(', ');
        response += `Number of students in ${field}: ${count}. List: ${studentList}\n`;
      }

      res.status(200).send(response);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const students = await readDatabase(req.app.locals.database);
      const fieldStudents = students[major];
      const studentList = fieldStudents.join(', ');
      const response = `List: ${studentList}\n`;
      res.status(200).send(response);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
