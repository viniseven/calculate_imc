const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')
const modal = document.querySelector('.modal-wrapper')
const btnCloseModal = document.querySelector('.close')

btnCloseModal.addEventListener('click', handleCloseModal)

form.onsubmit = (event) => {
   event.preventDefault()

   const weight = Number(inputWeight.value)
   const height = Number(inputHeight.value)

   const resultImc = calcImc(weight, height)

   modal.querySelector('span').innerText =`Seu IMC é de ${resultImc}`
   modal.classList.add('open')
}


function calcImc(weight, height){
   
   
   return (weight / ((height / 100) ** 2)).toFixed(2)
}


function handleCloseModal(){
   modal.classList.remove('open')
   form.reset();
}
