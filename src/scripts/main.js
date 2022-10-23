import * as bootstrap from 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../sass/main.scss'



// pages
// page::home
import './pages/home'
import './pages/about'


// all pages
const loaderTime = 2000
window.addEventListener('DOMContentLoaded', () => {
  // disable loader
  const loaderEL = document.querySelector('.loader-wrapper')
  if (loaderEL) {
    setTimeout(() => loaderEL.classList.add('hide'), loaderTime)
  }
})
window.addEventListener('beforeunload', async (ev) => {
  // enable loader
  const loaderEL = document.querySelector('.loader-wrapper')
  if (loaderEL) {
    loaderEL.classList.remove('hide')
    await new Promise((resolve) => setTimeout(resolve, loaderTime))
  }
  try {
    ev.preventDefault()
    ev.returnValue = ''
  } catch (error) {}
})
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY
  const navbarEl = document.querySelector('.navbar')
  if (navbarEl) {
    if (scrollTop > 0) {
      navbarEl.classList.add('scrolled')
    } else {
      navbarEl.classList.remove('scrolled')
    }
  }
})

// navbar
async function navbarUpdate() {
  const navbarEl = document.querySelector('.navbar')
  const checkCollapsedNavbar = document.querySelector('.navbar .navbar-collapse')
  if (navbarEl) {
    if (checkCollapsedNavbar.classList.contains('show')) {
      navbarEl.classList.add('collapsed')
    } else {
      navbarEl.classList.remove('collapsed')
    }
  }
  await new Promise((resolve) => setTimeout(resolve, 1))
  setTimeout(navbarUpdate, 1)
}
setTimeout(navbarUpdate, 1)