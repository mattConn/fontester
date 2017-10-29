##include menu.es6

const d = document;
let get = (element) => d.querySelector(element);
let getall = (element) => d.querySelectorAll(element);

// remove dummy item from ft_fonts
ft_fonts.pop();

let i = 0;
d.addEventListener("click",function(event){
    let t = event.target;
    t.style.fontFamily = ft_fonts[i];

    if(i == ft_fonts.length - 1)
        i = 0;
    else
        i++;
});