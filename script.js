// the #cursor should change after the nav-elements are hovere
let cursor = document.querySelector('.cursor');
let liInNav = document.querySelectorAll('#nav li');
let crsr = cursor;
var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    // crsr.style.transition = "all 0.5s ease-in";
    crsr.style.scale = 3;
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    // crsr.style.transition = "";
    crsr.style.scale = 1;
    crsr.style.border = "0px solid #95C11E";
    crsr.style.backgroundColor = "#95C11E";
  });
});

// let myele = document.querySelector('#na')


let nav = document.getElementById('nav');

// scroll event for nav-bar bg-color and height
window.addEventListener('scroll', () => {
    // console.log(window.scrollY);
    if(window.scrollY >= 70) {
        nav.style.backgroundColor = "black";
        nav.style.height = "110px"
    }
    else {
        nav.style.backgroundColor = "";
        nav.style.height = "130px";
    }
})

// movemove event for cursor movement
let cursor_blur = document.querySelector('.cursor-blur')
document.addEventListener('mousemove', function(e) {
    cursor.style.left = e.clientX+2+'px';
    cursor.style.top = e.clientY+2+'px';
    cursor_blur.style.left = e.clientX-250+'px';
    cursor_blur.style.top = e.clientY-250+'px';
})

// changing the background-color on scroll event
window.addEventListener('scroll', ()=> {
    changeBgColor();
})

function changeBgColor() {
    let from = 0.15;
    let to = 0.4;
    let main = document.getElementById('main');
    let innerHeight = window.innerHeight;
    let start = from * innerHeight;
    let scrollFromHalf = (window.scrollY - start);
    let ratio = scrollFromHalf/(innerHeight*to);

    ratio = Math.min(1, Math.max(0.38, ratio));
    main.style.backgroundColor = `rgba(0, 0, 0, ${ratio})`
}

// function to decrease the size of the #arrow when hovered
let arrow = document.querySelector('#arrow');


// movement of colon when Intersection of veiwport occurs
let colon1 = document.getElementById('colon1');
let colon2 = document.getElementById('colon2');

let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            console.log("Hi");
            colon1.classList.add('moveCol1');
            colon2.classList.add('moveCol2');
        }
        else {
            colon1.classList.remove('moveCol1');
            colon2.classList.remove('moveCol2');
        }
    })   
})

let paraInPage3 = document.querySelector('#page3 p')
observer.observe(paraInPage3);


// move about us up when Intersection of viewport
let observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            console.log("Hi");
            entry.target.classList.add('moveAbout_us_up');
        }
        else {
            entry.target.classList.remove('moveAbout_us_up');
        }
    })   
})

let about_us = document.querySelector('.about-us');
observer2.observe(about_us);

// move the h2 in page4 upwards when Intersection with viewport
let observer3 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            console.log("Hi");
            entry.target.classList.add('moveH1_up');
        }
        else {
            entry.target.classList.remove('moveH1_up');
        }
    })   
})

let h1 = document.querySelector('#page4 h1');
observer3.observe(h1);