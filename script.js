// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects
  const employees = []
  let = addingEmployees = true;

  while (addingEmployees) {
    const firstName = prompt("Enter first name:")
    const lastName = prompt("Enter last name:")
    let salary = prompt("Enter Salary:")

    salary = isNaN(salary) ? 0 : Number(salary);
    employees.push({
      firstName: firstName, lastName: lastName, salary: salary
    })

    addingEmployees = confirm("would you like to add another employee?")
  }
  return employees;
  // let salaryString = prompt("Enter Salary:")
  // if (isNaN(salaryString)) {
  //   salaryString = 0
  //   return salaryString;
  // }
  //   // const employeeSalary = parseInt(salaryString)
  // const employeeObjects = {firstName: `${firstName}`, lastName: `${lastName}`, salary: `${salaryString}`}
  // const employeesObjectArray = []
  // employeesObjectArray.push(employeeObjects);
  // addAnother = confirm("Do you want to add another employee?")
  // return employeesObjectArray;
};



// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  const numberOfEmployees = employeesArray.length;

  const totalSalary = employeesArray.reduce((acc, employee) => acc + employee.salary, 0);

  let averageSalary = totalSalary / numberOfEmployees;

  const formattedAverageSalary = averageSalary.toFixed(2);

  console.log(`The average employee salary between our ${numberOfEmployees} employee(s) is $${formattedAverageSalary}`)
  // let totalSalary = undefined;
  // for (i=0;i<collectEmployees.length;i++) {
  //   totalSalary = + collectEmployees[2]
  //   return totalSalary;
  // }
  // const averageSalary = totalSalary / collectEmployees.length
  // console.log(averageSalary)
};


// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
  const randomSelected = Math.floor(Math.random() * employeesArray.length);
  const employeePick = employeesArray[randomSelected];
  console.log(`Congratulations to ${employeePick.firstName} ${employeePick.lastName}, our random drawing winner!`);
};



/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement('td');
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement('td');
    // Format the salary as currency
    // const salary = collectEmployees.find((x) => x.Salary === String)
    salaryCell.textContent = currentEmployee.salary.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
