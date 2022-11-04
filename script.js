import { modal } from './modal.js' 

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')



form.onsubmit = (event) => {
   event.preventDefault()

   const weight = Number(inputWeight.value)
   const height = Number(inputHeight.value)

   const resultImc = calcImc(weight, height)
   const message = `Seu IMC é de ${resultImc}`

   modal.message.innerText = message
   modal.open()
}


function calcImc(weight, height){

   return (weight / ((height / 100) ** 2)).toFixed(2)
}



