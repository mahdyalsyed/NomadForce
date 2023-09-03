// wow = new WOW({
//     boxClass: "wow", // default
//     animateClass: "animated", // default
//     offset: 0, // default
//     mobile: true, // default
//     live: true, // default
// });
// wow.init();
let ourStduioItem1 = document.getElementById("ourStduio__item1");
let ourStduioItem2 = document.getElementById("ourStduio__item2");
let ourStduioItem3 = document.getElementById("ourStduio__item3");
let ourStduioItem4 = document.getElementById("ourStduio__item4");
let ourStduioItem5 = document.getElementById("ourStduio__item5");

let angleLeft1 = document.getElementById("angle-left1");
let angleLeft2 = document.getElementById("angle-left2");
let angleLeft3 = document.getElementById("angle-left3");
let angleLeft4 = document.getElementById("angle-left4");
let angleLeft5 = document.getElementById("angle-left5");

let angleRight1 = document.getElementById("angle-right1");
let angleRight2 = document.getElementById("angle-right2");
let angleRight3 = document.getElementById("angle-right3");
let angleRight4 = document.getElementById("angle-right4");
let angleRight5 = document.getElementById("angle-right5");

angleLeft1.addEventListener("click", leftItem1);
angleLeft2.addEventListener("click", leftItem2);
angleLeft3.addEventListener("click", leftItem3);
angleLeft4.addEventListener("click", leftItem4);
angleLeft5.addEventListener("click", leftItem5);

angleRight1.addEventListener("click", rightItem1);
angleRight2.addEventListener("click", rightItem2);
angleRight3.addEventListener("click", rightItem3);
angleRight4.addEventListener("click", rightItem4);
angleRight5.addEventListener("click", rightItem5);

function leftItem1() {
    ourStduioItem1.style.display = "none";
    ourStduioItem2.style.display = "block";
}
function leftItem2() {
    ourStduioItem2.style.display = "none";
    ourStduioItem3.style.display = "block";
}
function leftItem3() {
    ourStduioItem3.style.display = "none";
    ourStduioItem4.style.display = "block";
}
function leftItem4() {
    ourStduioItem4.style.display = "none";
    ourStduioItem5.style.display = "block";
}
function leftItem5() {
    ourStduioItem5.style.display = "none";
    ourStduioItem1.style.display = "block";
}

function rightItem1() {
    ourStduioItem1.style.display = "none";
    ourStduioItem2.style.display = "block";
}
function rightItem2() {
    ourStduioItem2.style.display = "none";
    ourStduioItem3.style.display = "block";
}
function rightItem3() {
    ourStduioItem3.style.display = "none";
    ourStduioItem4.style.display = "block";
}
function rightItem4() {
    ourStduioItem4.style.display = "none";
    ourStduioItem5.style.display = "block";
}
function rightItem5() {
    ourStduioItem5.style.display = "none";
    ourStduioItem1.style.display = "block";
}

// navbar scroll
window.onscroll = function () {
    myFunction();
};

var header = document.querySelector(".navbar");
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}
