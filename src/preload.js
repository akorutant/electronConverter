window.addEventListener('DOMContentLoaded', () => {
    let burger = document.querySelector(".burger")
    let aside = document.querySelector("aside")
    burger.addEventListener("click", (e) => {
      aside.classList.toggle('show');
  })
})