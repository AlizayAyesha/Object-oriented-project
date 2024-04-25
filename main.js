import chalk from 'chalk';
import inquirer from 'inquirer';
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class Person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
}
async function getUsername() {
    const { name } = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter your name :',
            validate: (input) => {
                if (input.trim() === '') {
                    return 'Please enter a valid name.';
                }
                return true;
            },
        },
    ]);
    return name;
}
async function addStudents() {
    const { studentName } = await inquirer.prompt([
        {
            type: 'input',
            name: 'studentName',
            message: 'Enter student name you know:',
            validate: (input) => {
                if (input.trim() === '') {
                    return 'Please enter at least one student name you know a little.';
                }
                return true;
            },
        },
    ]);
    return studentName;
}
async function personality() {
    const { choice } = await inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'Do you like to talk to others?',
            choices: ['Yes', 'No'],
        },
    ]);
    return choice;
}
async function main() {
    const name = await getUsername();
    console.log(chalk.bold.magentaBright(`Hello, ${name}!`));
    const studentName = await addStudents();
    console.log(chalk.bold.cyan(`Student name added: ${studentName}`));
    const type = await personality();
    if (type === 'Yes') {
        console.log(chalk.green('Your personality type isExtrovert'));
    }
    else {
        console.log(chalk.red('Your personality type is Introvert'));
    }
}
// Call main function to run the program
main();
