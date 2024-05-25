"use strict";
// Part 3: Array with Types and Indexing-Employee Salaries
// Challenge:
//Managing Employess Salaries for a Company.
//2. Define an Array named employees containing employee objects.Each employee object should include a name, hoursWorked, horlyrate and salary.
const employee = [
    {
        name: "furqan",
        hoursWorked: 8,
        hourlyRate: 300,
        salary: 0
    },
    {
        name: "mohsin",
        hoursWorked: 18,
        hourlyRate: 350,
        salary: 0
    },
    {
        name: "jawad",
        hoursWorked: 7,
        hourlyRate: 300,
        salary: 0
    }
];
//3. Implement a function named calculateSalary that calculates the salary of each employee based on the hours worked and hourly rate.
// function calculateSalary (employee:Employee){
//     let salary = employee.hoursWorked*employee.hourlyRate;
//     return salary;
// }
// for(let employees of employee){
//     employees.salary = calculateSalary(employees)
// }
// console.log(employee);
//4.If employee has workes an 20 hours or more,apply a 10% bonus to their salary.
// Now for impementing this i have to adjust in function and rewrite the function again
function calculateSalary2(employee) {
    let salary = employee.hoursWorked * employee.hourlyRate;
    if (employee.hoursWorked >= 20) {
        console.log(`${employee.name}get 10% increament. salary: ${salary *= 1.10} `);
    }
    return salary;
}
for (let employees of employee) {
    employees.salary = calculateSalary2(employees);
}
console.log(employee);
