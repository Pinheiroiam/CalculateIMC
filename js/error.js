export const Error = {
  message: document.querySelector('.alert-error'),
  open() {
    Error.message.classList.add('open')
  },
  close() {
    Error.message.classList.remove('open')
  }
}