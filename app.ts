#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation"

function turnOff(){ //function for time the animation will be on
    return new Promise((resolve)=>{
        setTimeout(resolve,2500)
    })
}

async function display(){ //function for animation
    let title=chalkAnimation.rainbow('Currency Convertor');
    await turnOff();
    let anotherTitle=chalkAnimation.karaoke('Lets get you started!');
    await turnOff();
    anotherTitle.stop();
} 

async function currencyChanging(){ //main function of currency changing
    
    do{ //do all the code in this code-block at least once

        let CurrencySelector=await inquirer.prompt([{ //ask the user to select a currency
            name:'CurrencySelector',
            type:'list',
            message:'Please select a currency!',
            choices:['US Dollar (USD)','Pound (GBP)','Riyal (SAR)','Euro (EUR)'] //option of available currencies
        }]);

        let CurrencyChanger= await inquirer.prompt([{ //ask the user to select a currency to which change the previous currency
            name:'CurrencyChanger',
            type:'list',
            message:'Select the currency to convert to!',
            choices:['US Dollar (USD)','Pound (GBP)','Riyal (SAR)','Euro (EUR)']
        }]);

        if(CurrencySelector.CurrencySelector=='US Dollar (USD)'){ //operations if the user select USD as a currency to change

            if(CurrencySelector.CurrencySelector=='US Dollar (USD)'&& CurrencyChanger.CurrencyChanger=='US Dollar (USD)'){
            //will run if user want to convert usd into usd    

                let amount= await inquirer.prompt([{ //user enter amount to convert
                    name:'amount',
                    type:'input',
                    message:'Enter amount to convert: '
                }])
                
                let amountConverted=amount.amount*1; //amount is converted
                console.log(`${amount.amount} in USD is: ${amountConverted}`) //result of currency conversion operation displayed
            }

            else if(CurrencySelector.CurrencySelector=='US Dollar (USD)'&& CurrencyChanger.CurrencyChanger=='Pound (GBP)'){
                //will run if user want to convert usd into pound

                let amount= await inquirer.prompt([{
                    name:'amount',
                    type:'input',
                    message:'Enter amount to convert: '
                }])
                
                let amountConverted=amount.amount*0.82; //currency conversion
                console.log(`${amount.amount} USD in GBP is: ${amountConverted}`)//result of currency conversion
            }
            else if(CurrencySelector.CurrencySelector=='US Dollar (USD)'&& CurrencyChanger.CurrencyChanger=='Riyal (SAR)'){
                // will run if user want to convert usd into saudi riyal

                let amount= await inquirer.prompt([{
                    name:'amount',
                    type:'input',
                    message:'Enter amount to convert: '
                }])
                
                let amountConverted=amount.amount*3.76; //currency conversion
                console.log(`${amount.amount} USD in SAR is: ${amountConverted}`) //currency conversion result displayed
            }
            else if(CurrencySelector.CurrencySelector=='US Dollar (USD)'&& CurrencyChanger.CurrencyChanger=='Euro (EUR)'){
                // will run if the user want to convert usd to euro

                let amount= await inquirer.prompt([{
                    name:'amount',
                    type:'input',
                    message:'Enter amount to convert: '
                }])
                
                let amountConverted=amount.amount*0.92; //currency conversion
                console.log(`${amount.amount} USD in EUR is: ${amountConverted}`)
            }
        } //usd conversion ends here

        else if(CurrencySelector.CurrencySelector=='Pound (GBP)'){
            //will run if the user select pound as currency to change
            
            if(CurrencySelector.CurrencySelector=='Pound (GBP)' && CurrencyChanger.CurrencyChanger=='US Dollar (USD)'){
                //will run if user want to change pound to dollar

                let amount= await inquirer.prompt([{
                    name:'amount',
                    type:'input',
                    message:'Enter amount to convert: '
                }])
                
                let amountConverted=amount.amount*1.23; //currency conversion
                console.log(`${amount.amount} GBP in USD is: ${amountConverted}`)
            }

            else if(CurrencySelector.CurrencySelector=='Pound (GBP)' && CurrencyChanger.CurrencyChanger=='Pound (GBP)'){
                //will run if user want to convert pount to pound
                
                let amount= await inquirer.prompt([{
                    name:'amount',
                    type:'input',
                    message:'Enter amount to convert: '
                }])

                let amountConverted=amount.amount*1; //currency conversion
                console.log(`${amount.amount} GBP in GBP is: ${amountConverted}`)
            }

            else if(CurrencySelector.CurrencySelector=='Pound (GBP)' && CurrencyChanger.CurrencyChanger=='Riyal (SAR)'){
                //will run if the user want to convert pound to saudi riyal
                
                let amount= await inquirer.prompt([{
                    name:'amount',
                    type:'input',
                    message:'Enter amount to convert: '
                }])

                let amountConverted=amount.amount*4.60; //currency conversion
                console.log(`${amount.amount} GBP in SAR is: ${amountConverted}`)
            }

            else if(CurrencySelector.CurrencySelector=='Pound (GBP)' && CurrencyChanger.CurrencyChanger=='Euro (EUR)'){
                //will run if the user want to convert pound to euro
                
                let amount= await inquirer.prompt([{
                    name:'amount',
                    type:'input',
                    message:'Enter amount to convert: '
                }])

                let amountConverted=amount.amount*1.13; //currency conversion
                console.log(`${amount.amount} GBP in EUR is: ${amountConverted}`)
            }
        } //end of pound conversion to other other currencies

        else if(CurrencySelector.CurrencySelector=='Riyal (SAR)'){
            //will run if user want to convert saudi riyal to other currencies

            if(CurrencySelector.CurrencySelector=='Riyal (SAR)' && CurrencyChanger.CurrencyChanger=='US Dollar (USD)'){
                //will run if the user want to convert riyal to dollar

                let amount= await inquirer.prompt([{
                    name:'amount',
                    type:'input',
                    message:'Enter amount to convert: '
                }])

                let amountConverted=amount.amount*0.27;//currency conversion
                console.log(`${amount.amount} SAR in USD is: ${amountConverted}`)
            }

            else if(CurrencySelector.CurrencySelector=='Riyal (SAR)' && CurrencyChanger.CurrencyChanger=='Pound (GBP)'){
                //will run if user want to convert riyal to pound
                
                let amount= await inquirer.prompt([{
                    name:'amount',
                    type:'input',
                    message:'Enter amount to convert: '
                }])

                let amountConverted=amount.amount*0.22; //currency conversion
                console.log(`${amount.amount} SAR in GBP is: ${amountConverted}`)
            }

            else if(CurrencySelector.CurrencySelector=='Riyal (SAR)' && CurrencyChanger.CurrencyChanger=='Riyal (SAR)'){
                //will run if user want to convert riyal to riyal
                
                let amount= await inquirer.prompt([{
                    name:'amount',
                    type:'input',
                    message:'Enter amount to convert: '
                }])

                let amountConverted=amount.amount*1.0;//currency conversion
                console.log(`${amount.amount} in SAR is: ${amountConverted}`)
            }
            else if(CurrencySelector.CurrencySelector=='Riyal (SAR)' && CurrencyChanger.CurrencyChanger=='Euro (EUR)'){
                //will run if user want to convert riyal to euro
                
                let amount= await inquirer.prompt([{
                    name:'amount',
                    type:'input',
                    message:'Enter amount to convert: '
                }])

                let amountConverted=amount.amount*0.25; //currency conversion
                console.log(`${amount.amount} SAR in EUR is: ${amountConverted}`)
            }
        } //end of riyal conversion

        else if(CurrencySelector.CurrencySelector=='Euro (EUR)'){
            //will run only if user select euro as currency to convert
            
            if(CurrencySelector.CurrencySelector=='Euro (EUR)' && CurrencyChanger.CurrencyChanger=='US Dollar (USD)'){
                //will run if user want to convert euro to dollar
                
                let amount= await inquirer.prompt([{
                    name:'amount',
                    type:'input',
                    message:'Enter amount to convert: '
                }])
                
                let amountConverted=amount.amount*1.08; //currency conversion
                console.log(`${amount.amount} EUR in USD is: ${amountConverted}`)
            }

            else if(CurrencySelector.CurrencySelector=='Euro (EUR)' && CurrencyChanger.CurrencyChanger=='Pound (GBP)'){
                //will run if user want to convert euro to pound

                let amount= await inquirer.prompt([{
                    name:'amount',
                    type:'input',
                    message:'Enter amount to convert: '
                }])
                
                let amountConverted=amount.amount*0.88; //currency conversion
                console.log(`${amount.amount} EUR in GBP is: ${amountConverted}`)
            }

            else if(CurrencySelector.CurrencySelector=='Euro (EUR)' && CurrencyChanger.CurrencyChanger=='Riyal (SAR)'){
                //will run if user want to convert euro to riyal
                
                let amount= await inquirer.prompt([{
                    name:'amount',
                    type:'input',
                    message:'Enter amount to convert: '
                }])

                let amountConverted=amount.amount*4.06; //currency conversion
                console.log(`${amount.amount} EUR in SAR is: ${amountConverted}`)
            }

            else if(CurrencySelector.CurrencySelector=='Euro (EUR)' && CurrencyChanger.CurrencyChanger=='Euro (EUR)'){
                //will run if user want to convert euro to euro
                
                let amount= await inquirer.prompt([{
                    name:'amount',
                    type:'input',
                    message:'Enter amount to convert: '
                }])

                let amountConverted=amount.amount*1;//currency conversion
                console.log(`${amount.amount} in EUR is: ${amountConverted}`)
            }
        } //end of euro conversion to other currencies

        var doAgain= await inquirer.prompt([{ //ask the user whether he/she want to do conversion again
            name:'doAgain',
            type:'list',
            message:'Do you want to do it again?',
            choices:['Yes','No']
        }])
    }while(doAgain.doAgain=='Yes') //continue until user select 'Yes'
}


await display();
currencyChanging()