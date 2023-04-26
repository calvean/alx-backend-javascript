export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentsToUpdate = students.filter(student => student.location === city);
  
  return studentsToUpdate.map(student => {
    const gradeObj = newGrades.find(grade => grade.studentId === student.id);
    if (gradeObj) {
      return {
        ...student,
        grade: gradeObj.grade
      }
    } else {
      return {
        ...student,
        grade: "N/A"
      }
    }
  });
}
