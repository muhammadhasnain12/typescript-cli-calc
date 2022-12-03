#!/usr/bin/env node
import ChalkAnimation from 'chalk-animation';
import Chalk from 'chalk';
import inquirer from 'inquirer';
import figlet from 'figlet';
const sleep = () => {
    return new Promise((res, rej) => {
        setTimeout(res, 2000);
    });
};
async function Welcome() {
    const rainbow = ChalkAnimation.rainbow('Are you here to use the TypeScript Calculator \n        Created by Muhammad Hasnain');
    await sleep();
    rainbow.stop();
    console.log(Chalk.yellow(`     _____________________
    |  _________________  |
    | | JO           0. | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|`));
    figlet('   Develop By Hasnain', function (err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(Chalk.yellow(data));
        startAgain();
    });
}
await Welcome();
async function askQuestion() {
    await inquirer.prompt([
        {
            type: "list",
            name: "operator",
            message: "Please use Arrow key to Select your option! \n",
            choices: ["Addition", "Subtraction", "Multiplication", "Division"]
        },
        {
            type: "number",
            name: "num1",
            message: "First Number? ",
        },
        {
            type: "number",
            name: "num2",
            message: "Second Number? ",
        }
    ])
        .then((answer) => {
        if (answer.operator == "Addition") {
            console.log(`${Chalk.green('√')} Your Answer is : ${Chalk.green(answer.num1 + answer.num2)}`);
        }
        else if (answer.operator == "Subtraction") {
            console.log(`${Chalk.green('√')} Your Answer is : ${Chalk.green(answer.num1 - answer.num2)}`);
        }
        else if (answer.operator == "Multiplication") {
            console.log(`${Chalk.green('√')} Your Answer is : ${Chalk.green(answer.num1 * answer.num2)}`);
        }
        else {
            console.log(`${Chalk.green('√')} Your Answer is : ${Chalk.green(answer.num1 % answer.num2)}`);
        }
    });
}
async function startAgain() {
    do {
        await askQuestion();
        var again = await inquirer.prompt({
            type: "input",
            name: "restart",
            message: `Do you want to continue ? ${Chalk.gray('(Y/n)')} `
        });
    } while (again.restart == 'y' || again.restart == 'Y' || again.restart == 'yes' || again.restart == 'YES');
}
