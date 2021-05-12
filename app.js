const {getTitle, input} = require('./view')
const {tipCalculator, finalPayCalculator} = require('./update')


//bill acount , %tip
let initState = [0,0]; 

async function app(value) {
    
        console.log(getTitle())
        console.log('\n\n')

        value[0] = await input('Bill amount?')
        if ( value[0]==='Enter a valid number'){
            console.clear()
        }else{
            value[1] =await input('Tip (%)?')
            if ( value[1]==='Enter a valid number'){
                console.clear()
            }else{
                let tipAmount=tipCalculator(value[0].input, value[1].input)
                let billAmount=finalPayCalculator(value[0].input, tipAmount)
                console.log(tipAmount)
                console.log(billAmount)
                //armar tabla
            }
        }

        
        }

        
        

    



app(initState);