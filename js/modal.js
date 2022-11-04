export const modal = {
    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.modal span'),
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
 