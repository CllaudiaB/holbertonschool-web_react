interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }

const student1: Student  = {
    firstName: "Mickey",
    lastName: "Mouse",
    age: 97,
    location: "US",
};

const student2: Student  = {
    firstName: "Donald",
    lastName: "Duck",
    age: 91,
    location: "US",
};

const studentsList: Student[] = [student1, student2];

function createTable() {
    const table = document.createElement("table");
    studentsList.forEach((student) => {
      const row = table.insertRow();
      const firstName = row.insertCell();
      const location = row.insertCell();
      firstName.textContent = student.firstName;
      location.textContent = student.location;
    });
    document.body.appendChild(table);
  }
  
  createTable();
