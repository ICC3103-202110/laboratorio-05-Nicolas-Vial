
function tipCalculator(number1, number2){
    let tipValue=(number1*number2)/100
    return tipValue
}

function finalPayCalculator(number1, number2){
    finalValuePay=parseInt(number1)+parseInt(number2)
    return finalValuePay
}

module.exports = {
    tipCalculator,
    finalPayCalculator
}
