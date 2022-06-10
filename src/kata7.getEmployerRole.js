const getEmployerRole = (employeeName, employees) => {
  for (let i = 0; i < employees.length; i++) {
    if (employees[i].name === employeeName) {
      return employees[i].role;
    }
  }
};
const employees = [
  {
    name: "Satti",

    role: "Developer",
  },
  {
    name: "Jenny",

    role: "Sales Associate",
  },
  {
    name: "Steve",

    role: "Footballer",
  },
];

console.log(getEmployerRole("Steve", employees));

module.exports = getEmployerRole;
