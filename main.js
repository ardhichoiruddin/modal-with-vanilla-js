
var modal = document.querySelector('.modal');
var backdrop = document.querySelector('.backdrop');
var buttonShow = document.querySelector('button');
var buttonClose = document.querySelector('.modal-close');

function closeModal(){
  if(backdrop){
      modal.classList.remove('show');
      backdrop.classList.remove('show');
  }
  
  if(buttonClose){
      modal.classList.remove('show');
      backdrop.classList.remove('show');
  }
}

buttonShow.addEventListener('click', function(){
  modal.classList.add('show');
  backdrop.classList.add('show');
  
  backdrop.addEventListener('click', closeModal);
  
  modal.addEventListener('click', closeModal);
});