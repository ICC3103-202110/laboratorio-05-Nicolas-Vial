const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')

function getTitle(){
    return chalk.green(
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


module.exports = {
    getTitle,
    input
}

