const muneBtn = document.querySelector('.header__nav-btn')
const nav = document.querySelector('.header__nav')

muneBtn.addEventListener('click', () => {
  nav.classList.toggle('header__nav-btn--open')
})
