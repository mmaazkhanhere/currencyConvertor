#! /usr/bin/env node
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
function turnOff() {
    return new Promise((resolve) => {
        setTimeout(resolve, 2500);
    });
}
async function display() {
    let title = chalkAnimation.rainbow('Currency Convertor');
    await turnOff();
    let anotherTitle = chalkAnimation.karaoke('Lets get you started!');
    await turnOff();
    anotherTitle.stop();
}
async function currencyChanging() {
    let CurrencySelector = await inquirer.prompt([{
            name: 'CurrencySelector',
            type: 'list',
            message: 'Please select a currency!',
            choices: ['US Dollar (USD)', 'Pound (GBP)', 'Riyal (SAR)', 'Euro (EUR)']
        }]);
    let CurrencyChanger = await inquirer.prompt([{
            name: 'CurrencyChanger',
            type: 'list',
            message: 'Select the currency to convert to!',
            choices: ['US Dollar (USD)', 'Pound (GBP)', 'Riyal (SAR)', 'Euro (EUR)']
        }]);
    if (CurrencySelector.CurrencySelector == 'US Dollar (USD)') {
        if (CurrencySelector.CurrencySelector == 'US Dollar (USD)' && CurrencyChanger.CurrencyChanger == 'US Dollar (USD)') {
            let amount = await inquirer.prompt([{
                    name: 'amount',
                    type: 'input',
                    message: 'Enter amount to convert: '
                }]);
            let amountConverted = amount.amount * 1;
            console.log(`${amount.amount} in USD is: ${amountConverted}`);
        }
        else if (CurrencySelector.CurrencySelector == 'US Dollar (USD)' && CurrencyChanger.CurrencyChanger == 'Pound (GBP)') {
            let amount = await inquirer.prompt([{
                    name: 'amount',
                    type: 'input',
                    message: 'Enter amount to convert: '
                }]);
            let amountConverted = amount.amount * 0.82;
            console.log(`${amount.amount} USD in GBP is: ${amountConverted}`);
        }
        else if (CurrencySelector.CurrencySelector == 'US Dollar (USD)' && CurrencyChanger.CurrencyChanger == 'Riyal (SAR)') {
            let amount = await inquirer.prompt([{
                    name: 'amount',
                    type: 'input',
                    message: 'Enter amount to convert: '
                }]);
            let amountConverted = amount.amount * 3.76;
            console.log(`${amount.amount} USD in SAR is: ${amountConverted}`);
        }
        else if (CurrencySelector.CurrencySelector == 'US Dollar (USD)' && CurrencyChanger.CurrencyChanger == 'Euro (EUR)') {
            let amount = await inquirer.prompt([{
                    name: 'amount',
                    type: 'input',
                    message: 'Enter amount to convert: '
                }]);
            let amountConverted = amount.amount * 0.92;
            console.log(`${amount.amount} USD in EUR is: ${amountConverted}`);
        }
    }
    else if (CurrencySelector == 'Pound (GBP)') {
        if (CurrencySelector == 'Pound (GBP)' && CurrencyChanger == 'US Dollar (USD)') {
            let amount = await inquirer.prompt([{
                    name: 'amount',
                    type: 'input',
                    message: 'Enter amount to convert: '
                }]);
            let amountConverted = amount.amount * 1.23;
            console.log(`${amount.amount} GBP in USD is: ${amountConverted}`);
        }
        else if (CurrencySelector == 'Pound (GBP)' && CurrencyChanger == 'Pound (GBP)') {
            let amount = await inquirer.prompt([{
                    name: 'amount',
                    type: 'input',
                    message: 'Enter amount to convert: '
                }]);
            let amountConverted = amount.amount * 1;
            console.log(`${amount.amount} GBP in GBP is: ${amountConverted}`);
        }
        else if (CurrencySelector == 'Pound (GBP)' && CurrencyChanger == 'Riyal (SAR)') {
            let amount = await inquirer.prompt([{
                    name: 'amount',
                    type: 'input',
                    message: 'Enter amount to convert: '
                }]);
            let amountConverted = amount.amount * 4.60;
            console.log(`${amount.amount} GBP in SAR is: ${amountConverted}`);
        }
        else if (CurrencySelector == 'Pound (GBP)' && CurrencyChanger == 'Euro (EUR)') {
            let amount = await inquirer.prompt([{
                    name: 'amount',
                    type: 'input',
                    message: 'Enter amount to convert: '
                }]);
            let amountConverted = amount.amount * 1.13;
            console.log(`${amount.amount} GBP in EUR is: ${amountConverted}`);
        }
    }
}
await display();
currencyChanging();
