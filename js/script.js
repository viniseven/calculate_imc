import { AlertError } from './alert-error.js'
import { modal } from './modal.js'
import { calculateImc, verifyNumber } from './utils.js'


const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')



form.onsubmit = (event) => {
   event.preventDefault()

   const weight = Number(inputWeight.value)
   const height = Number(inputHeight.value)

   const showAlertError = verifyNumber(weight) || verifyNumber(height)

   if(showAlertError){
      AlertError.open()
      return
   }

   const resultImc = calculateImc(weight, height)
   
   const messageValueImc = `Seu IMC é de ${resultImc}`
   let messageStatusImc

   if (resultImc < 18.5){
      messageStatusImc = 'Você está abaixo do peso'
   }
   else if(resultImc > 18.5 && resultImc <= 24.9){
      messageStatusImc = 'Você está com o peso normal'

   }
   else if(resultImc >= 25 && resultImc <= 29.9){
      messageStatusImc = 'Você está com sobrepeso'

   }
   else if(resultImc >= 30 && resultImc <= 34.9 ){
      messageStatusImc = 'Você está com Obesidade Grau I'

   }
   else if(resultImc >= 35 && resultImc <= 39.9){
      messageStatusImc = 'Você está com Obesidade Grau II'

   }
   else{
      messageStatusImc = 'Você está com Obesidade Grau III ou Mórbida'

   }


   modal.messageValueImc.innerText = messageValueImc
   modal.messageStatusImc.innerText = messageStatusImc
   modal.open()
   form.reset()
}

inputWeight.onfocus = () => AlertError.close()
inputHeight.onfocus = () => AlertError.close()


