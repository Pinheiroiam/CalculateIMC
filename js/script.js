import { Modal } from './modal.js'
import { Error } from './error.js'
import { notANumber, calculateIMC } from './utils.js'
import { Level } from './level.js'

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

form.onsubmit = function (event) {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value
  const result = calculateIMC(weight, height)

  const weightOrHeightNotANumber = notANumber(weight) || notANumber(height)

  if (weightOrHeightNotANumber) {
    Error.open()
    return
  }

  Error.close()
  displayResultMessage(result)
}

function displayResultMessage(result) {
  const levelIMC = document.querySelector('h3')
  const advise = document.querySelector('p')

  const message = `Seu IMC é de ${result}`
  Modal.message.innerText = message


  if (result < 16) {
    Modal.message.innerText = 'IMC inválido'
  } else if ((result >= 16, result < 17)) {
    levelIMC.textContent = Level.levelOne.levelIMC
    advise.textContent = Level.levelOne.advise
  } else if ((result >= 17, result < 18.5)) {
    levelIMC.textContent = Level.levelTwo.levelIMC
    advise.textContent = Level.levelTwo.advise
  } else if ((result >= 18.5, result < 25)) {
    levelIMC.textContent = Level.levelThree.levelIMC
    advise.textContent = Level.levelThree.advise
  } else if ((result >= 25, result < 30)) {
    levelIMC.textContent = Level.levelFour.levelIMC
    advise.textContent = Level.levelFour.advise
  } else if ((result >= 30, result < 35)) {
    levelIMC.textContent = Level.levelFive.levelIMC
    advise.textContent = Level.levelFive.advise
  } else if ((result >= 35, result < 40)) {
    levelIMC.textContent = Level.levelSix.levelIMC
    advise.textContent = Level.levelSix.advise
  } else if (result > 40) {
    levelIMC.textContent = Level.levelSeven.levelIMC
    advise.textContent = Level.levelSeven.advise
  }

  Modal.open()
}

inputHeight.oninput = () => {
  Error.close()
}
inputWeight.oninput = () => {
  Error.close()
}
