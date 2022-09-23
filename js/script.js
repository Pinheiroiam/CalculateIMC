import { Modal } from './modal.js'
import { Error } from './error.js'
import { notANumber, calculateIMC } from './utils.js'

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
  const message = `Seu IMC é de ${result}`
  Modal.message.innerText = message
  Modal.open()
}

inputHeight.oninput = () => {
  Error.close()
}
inputWeight.oninput = () => {
  Error.close()
}
