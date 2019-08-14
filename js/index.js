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
firstPara.addEventListener('mouseleave', (e) => {
    e.stopPropagation();
    firstButton.style.display='none';
});

//5 when middle paragraph is clicked with any mouse btn, btn displays none.
const secondButton = document.querySelector('.second');
// console.log(secondButton);
const secondPara = document.querySelector('.middle p');
// console.log(secondPara);
secondButton.addEventListener('mousedown', (e) => {
    e.stopPropagation()
    secondPara.style.display='none'; 
});

//6 when you scroll with the mouse wheel buttons displays none.
const thirdButton = document.querySelector('.third');
// console.log(thirdButton);
const thirdPara = document.querySelector('.right p');
// console.log(thirdPara);
thirdPara.addEventListener('wheel', (e) => {
    e.stopPropagation()
    thirdButton.style.display='none'; 
});

7// mouse enters image and size reduces to 50%
const destinationPic = document.querySelector('.destPic');
// console.log(destinationPic);
destinationPic.addEventListener('mouseenter', (e) => {
    destinationPic.style.maxWidth='50%';
});


7// mouse moves image and size reduces to 50%
const funImg = document.querySelector('.fun');
// console.log(funImg);
funImg.addEventListener('mousemove', (e) => {
    funImg.style.maxWidth='50%';
});

//8 
const allText = document.querySelectorAll('p');
console.log(allText);
allText.forEach((paragraph, i) => {
    
    paragraph.addEventListener('contextmenu', (e) => {
    e.stopPropagation();
    paragraph.style.color='purple';
    }) 
  });




