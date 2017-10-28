/*
load fonts
target all text

click change text
    loop through fonts for fast preview, variable speeds
    have menu to select specified font with preview
*/

const d = document;
let get = (element) => d.querySelector(element);
let getall = (element) => d.querySelectorAll(element);

let textElements = [
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "p",
    "ul",
    "ol",
    "li",
    "a",
    "i",
    "b",
    "em",
    "strong"
];


d.addEventListener("click",function(event){
    let t = event.target;
    t.style.fontFamily="sans-serif";
});
