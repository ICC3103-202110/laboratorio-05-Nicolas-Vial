const {getTitle, input, table} = require('./view')
const {tipCalculator, finalPayCalculator} = require('./update')
const {printTable} = require('console-table-printer')



async function app(value) {
    
        while (true){  
            console.log('\n')  
            console.log(getTitle())
            console.log('\n\n')

            printTable(table(value[0],value[1],value[2],value[3]))

            let bill = await input('Bill amount?')
            if ( value[0]==='Enter a valid number'){
                console.clear()
            }else{
                let tip =await input('Tip (%)?')
                if ( value[1]==='Enter a valid number'){
                    console.clear()
                }else{
                    let tipAmount=tipCalculator(bill.input, tip.input)
                    let billAmount=finalPayCalculator(bill.input, tipAmount)
                    value[0]=bill.input
                    value[1]=tip.input
                    value[2]=tipAmount
                    value[3]=billAmount
                    console.clear()
    
                }
            }
        }   
    }

//bill amount , %tip, tip, total
let initState = [0,0,0,0]; 
app(initState);