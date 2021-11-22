const colorPicker = document.querySelector(".colorPicker");
const parentDiv = document.querySelector(".container");

colorPicker.addEventListener("input", function (ev) {
    parentDiv.style.color = colorPicker.value;
});

// ------------------------------------------------------------------------------

const colorPicker2 = document.getElementById("colorPicker2");
let children1 = document.querySelector('#fCH');
let children2 = document.querySelector('#sCH');
let children3 = document.querySelector('#tCH');


colorPicker2.addEventListener("input", function (ev) {
    children1.style.color = colorPicker2.value;
    children2.style.color = colorPicker2.value;
    children3.style.color = colorPicker2.value;

});

// ------------------------------------------------------------------------------

const colorPicker3 = document.getElementById("colorPicker3");
const bodyTag = document.querySelector("body");


colorPicker3.addEventListener("input", function (ev) {
    bodyTag.style.color = colorPicker3.value;
});
