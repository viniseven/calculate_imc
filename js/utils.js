
export function calculateImc(weight, height){

    return Number((weight / ((height / 100) ** 2)).toFixed(1))
 }
 
 export function verifyNumber(value){
    return isNaN(value) || value ==""
 }

 