import * as inquirer from "inquirer";
import chalk from "chalk";
// calculator oprator
var Oprator;
(function (Oprator) {
    Oprator["ADD"] = "Addition";
    Oprator["SUBTRACT"] = "Subtraction";
    Oprator["MULTIPLY"] = "Multiplication";
    Oprator["DIVIDE"] = "Division";
})(Oprator || (Oprator = {}));
const prompt = inquirer.createPromptModule();
function validateNumber(input) {
    if (isNaN(parseFloat(input))) {
        return "Please inter a valid number";
    }
    return true;
}
async function main() {
    const input = await prompt([
        {
            type: "input",
            name: "num1",
            message: "Enter first number",
            validate: validateNumber
        },
        {
            type: "rawlist",
            name: "operator",
            message: "Slect an operation:",
            choices: Object.values(Oprator)
        },
        {
            type: "input",
            name: "num2",
            message: "Enter second number:",
            validate: validateNumber,
        }
    ]);
    const num1 = parseFloat(input.num1);
    const num2 = parseFloat(input.num2);
    const slectedOperator = input.operator;
    let result;
    if (slectedOperator === Oprator.ADD) {
        result = num1 + num2;
        console.log(chalk.bgGray.yellow(`Result is: ${result}`));
    }
    else if (slectedOperator === Oprator.DIVIDE) {
        result = num1 / num2;
        console.log(chalk.bgGray.yellow(`Result is: ${result}`));
    }
    else if (slectedOperator === Oprator.MULTIPLY) {
        result = num1 * num2;
        console.log(chalk.bgGray.yellow(`Result is: ${result}`));
    }
    else if (slectedOperator === Oprator.SUBTRACT) {
        result = num1 - num2;
        console.log(chalk.bgGray.yellow(`Result is: ${result}`));
    }
}
export default main;
