interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const studentsList: Student[] = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 22,
    location: "New York",
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    age: 20,
    location: "Los Angeles",
  },
];

const table = document.createElement("table");

studentsList.forEach((student) => {
  const row = table.insertRow();
  const nameCell = row.insertCell();
  const locationCell = row.insertCell();

  nameCell.textContent = student.firstName;
  locationCell.textContent = student.location;
});

document.body.appendChild(table);
