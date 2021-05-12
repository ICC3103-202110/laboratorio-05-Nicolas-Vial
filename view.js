const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')



function getTitle(){
    return chalk.yellow(
        figlet.textSync(
            'Tip Calculator App',
            {
                horizontalLayout: 'full',
                font: 'Nancyj-Underlined'
            }
        )
    )
}


function input(msg){
    const message = msg
    return inquirer.prompt([
        {
            name: 'input',
            type: 'input',
            message: message,
            validate: function(value){
                if(isNaN(value) === false){
                    return true
                } else {
                    return 'Enter a valid number'
                }
            }
        }
    ])
}

function table(amount, percentage, finalTip, finalBill){
    const table=[{
        'Bill Amount':  '$'+amount.toString(), 
        'Tip (%)': percentage.toString()+'%', 
        'Tip': '$'+finalTip.toString(), 
        'Total': '$'+finalBill.toString()
    }]
    return table
}


module.exports = {
    getTitle,
    input,
    table
}

