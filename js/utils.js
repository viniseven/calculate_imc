
export function calculateImc(weight, height){

    return (weight / ((height / 100) ** 2)).toFixed(2)
 }
 
 export function verifyNumber(value){
    return isNaN(value) || value ==""
 }

 