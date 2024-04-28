#! /usr/bin/env node
import inquirer from "inquirer"; //Import inquirer
import chalk from "chalk"; //chalk
console.log(chalk.bold.italic.magentaBright("\n \tWelcome to the CLI Simple Calculator\n"));
const answer = await inquirer.prompt([
    { message: chalk.blueBright("Enter first number"), type: "number", name: "firstNumber" },
    { message: chalk.blueBright("Enter second number"), type: "number", name: "secondNumber" },
    {
        message: chalk.blue("Select one of the operator to perform operation"), //operations
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division", "Modulus"],
    },
]);
//Conditional statements if and else
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else if (answer.operator === "Modulus") {
    console.log(answer.firstNumber % answer.secondNumber);
}
else {
    console.log(chalk.bold.redBright("please select valid operator"));
}
