import inquirer from "inquirer";

(async () => {
    let myBalance = 10000; // Initial balance
    let myPin = 1234; // Default PIN

    // Prompt user for PIN
    let pinAnswer = await inquirer.prompt([
        {
            name: "pin",
            message: "Enter your PIN",
            type: "number"
        }
    ]);

    if (pinAnswer.pin === myPin) {
        console.log("Correct PIN code");

        // Prompt user for operation
        let operationAnswers = await inquirer.prompt([
            {
                name: "operation",
                message: "Please select an operation",
                type: "list",
                choices: ["Withdraw", "Check balance"]
            }
        ]);

        if (operationAnswers.operation === "Withdraw") {
            // Prompt user for withdrawal amount
            let amountAns = await inquirer.prompt([
                {
                    name: "amount",
                    message: "Enter the amount to withdraw",
                    type: "number"
                }
            ]);

            // Check if sufficient balance is available
            if (myBalance >= amountAns.amount) {
                myBalance -= amountAns.amount;
                console.log("Withdrawa successful!");
            } else {
                console.log("Insufficient balance!");
            }
        } else if (operationAnswers.operation === "Check balance") {
            // Display current balance
            console.log(`Your current balance is: ${myBalance}`);
        }
    } else {
        console.log("Incorrect PIN code");
    }
})();