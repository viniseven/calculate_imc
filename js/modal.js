export const modal = {
    wrapper: document.querySelector('.modal-wrapper'),
    messageValueImc: document.querySelector('.modal #resultImc'),
    messageStatusImc: document.querySelector('.modal #statusImc'),
    buttonClose: document.querySelector('.close'),
    
    open(){
       modal.wrapper.classList.add('open')
    },
 
    close(){
       modal.wrapper.classList.remove('open')
    }
 }

 
modal.buttonClose.onclick = () =>{
    modal.close()
 }

 
 window.addEventListener('keydown', handleKeydown)

 function handleKeydown(event){
   if(event.key == 'Escape'){
      modal.close()
   }
 }
 