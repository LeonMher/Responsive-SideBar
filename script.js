const button = document.querySelector('.btn');
const burgerButton = document.querySelector('.burgerBtn');
const sideBar = document.querySelector('.sideBar');

button.addEventListener('click', function(){

    sideBar.classList.toggle('newClass')

})

burgerButton.addEventListener('click', function(){

    sideBar.classList.toggle('newClass')

})
