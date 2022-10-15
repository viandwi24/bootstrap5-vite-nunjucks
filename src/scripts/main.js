import * as bootstrap from 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../sass/main.scss'



// pages
// page::home
import './pages/home'


// all pages
window.addEventListener('DOMContentLoaded', () => {
  // disable loader
  const loaderEL = document.querySelector('.loader-wrapper')
  if (loaderEL) {
    setTimeout(() => loaderEL.classList.add('hide'), 2000)
  }
})
window.addEventListener('beforeunload', async (ev) => {
  // enable loader
  const loaderEL = document.querySelector('.loader-wrapper')
  if (loaderEL) {
    loaderEL.classList.remove('hide')
    await new Promise((resolve) => setTimeout(resolve, 1000))
  }
  event.preventDefault()
  event.returnValue = ''
})