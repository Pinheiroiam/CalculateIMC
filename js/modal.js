import { Level } from './level.js'

export const Modal = {
  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal .title span'),
  btnClose: document.querySelector('.modal button.close'),
  levelIMC: document.querySelector('.modal .levelIMC'),
  advise: document.querySelector('.modal .advise'),
  open() {
    Modal.wrapper.classList.add('open')
  },
  close() {
    Modal.wrapper.classList.remove('open')
  }
}

Modal.btnClose.onclick = () => Modal.close()

window.addEventListener('keydown', handleKeydown)

function handleKeydown(event) {
  if (event.key === 'Escape') {
    Modal.close()
  }
}

function messageLevel() {
  if (result <= 16.9) {
    
  } else if (result <= 18.4) {
    
  } else if (result <= 24.9) {
    
  } else if (result <= 29.9) {
  
  } else if (result <= 34.9) {
    
  } else if (result <= 39.9) {
    
  } else if (result >= 40) {
   
  }
}