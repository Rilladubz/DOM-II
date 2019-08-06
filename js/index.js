// Your code goes here

// 1 When bus/sand pic clicked size is halved
const bus = document.querySelector('.bus');
// console.log(bus);
bus.addEventListener('click', (e) => {
    bus.style.maxWidth='50%';
});

// 2 when mouse leaves bus image size returns to normal size
bus.addEventListener('mouseover', (e) => {
    bus.style.maxWidth='100%';
});

//3 when logo is double clicked nav color changes red
const logo = document.querySelector('.logo-heading');
// console.log(logo);
const nav = document.querySelectorAll('.nav-link');
// console.log(nav);
logo.addEventListener('dblclick', (e) => { 
    nav.forEach((navItem, i) => {
        navItem.style.color='red';
      });
});

//4 when mouseleaves first button paragraph displays none
const firstButton = document.querySelector('.first');
// console.log(firstButton);
const firstPara = document.querySelector('.left p');
// console.log(firstPara);
firstButton.addEventListener('mouseleave', (e) => {
    firstPara.style.display='none';
});

//5 when middle paragraph is clicked with any mouse btn, btn displays none.
const secondButton = document.querySelector('.second');
// console.log(secondButton);
const secondPara = document.querySelector('.middle p');
// console.log(secondPara);
secondPara.addEventListener('mousedown', (e) => {
    secondButton.style.display='none'; 
});

//6 when you scroll with the mouse wheel buttons displays none.
const thirdButton = document.querySelector('.third');
// console.log(thirdButton);
const thirdPara = document.querySelector('.right p');
// console.log(thirdPara);
thirdPara.addEventListener('wheel', (e) => {
    thirdButton.style.display='none'; 
});

7//


