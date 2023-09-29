import * as inquirer from "inquirer";
import chalk from "chalk";

// calculator oprator

enum Oprator {

    ADD = "Addition",
    SUBTRACT = "Subtraction",
    MULTIPLY = "Multiplication",
    DIVIDE = "Division"

}

const prompt = inquirer.createPromptModule();

function validateNumber(input: string): boolean | string 
 {
    if (isNaN(parseFloat(input))) 
    {
       return "Please inter a valid number"
    }
    return true;
 }


async function main() 
{
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
])

const num1 = parseFloat(input.num1);
const num2 = parseFloat(input.num2);
const slectedOperator = input.operator as Oprator;
let result: number;

if (slectedOperator === Oprator.ADD)
    {
      result = num1 + num2;
      console.log(chalk.bgGray.yellow(`Result is: ${result}`));
        } else if(slectedOperator === Oprator.DIVIDE)
    {
      result = num1 / num2;
      console.log(chalk.bgGray.yellow(`Result is: ${result}`));
    } else if(slectedOperator === Oprator.MULTIPLY)
    {
      result = num1 * num2;
      console.log(chalk.bgGray.yellow(`Result is: ${result}`));
    } else if(slectedOperator === Oprator.SUBTRACT)
    {
      result = num1 - num2;
      console.log(chalk.bgGray.yellow(`Result is: ${result}`));
    }
}

export default main
