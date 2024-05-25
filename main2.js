"use strict";
/// Part 2: Multi-Dimentional Arrays and Tuples - student Grades
// Challenge:
//1.Define a typeScript type alias named student to represent a student with the following properties:
//. name(string):The name of the student.
//. grades(number[]):An array of grades for different subjects
// 2.Create an array named students containing atleast three student object.Each student Object should include a name and an array of grades.
const students = [
    {
        name: "farhan",
        grades: [90, 89, 92]
    },
    {
        name: "jawad",
        grades: [85, 88, 72]
    },
    {
        name: "hassan",
        grades: [70, 82, 86]
    },
];
//3. Implement a function named CalculateAverageGrade that takes a student's grade as input and returns the average grade for that student
function CalculateAverageGrade(grades) {
    let result = grades.reduce((total, sum) => sum + total, 0);
    return result / grades.length;
}
//4 .Display each student's name and average grade.Iterating through the students array.Calculate the average grade for each student using the
// calculateAverageGrade function and print their name and average grade.
// Aagain using  of-lopp
for (let student of students) {
    let averagegrade = CalculateAverageGrade(student.grades);
    console.log(`name: ${student.name}`);
    console.log(`Grades: ${student.grades}`);
    console.log(`AverageGrade: ${averagegrade.toFixed(2)}`);
    console.log(averagegrade);
}
;
