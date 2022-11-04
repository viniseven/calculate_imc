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
   const message = `Seu IMC é de ${resultImc}`

   modal.message.innerText = message
   modal.open()
   form.reset()
}

inputWeight.onfocus = () => AlertError.close()
inputHeight.onfocus = () => AlertError.close()


