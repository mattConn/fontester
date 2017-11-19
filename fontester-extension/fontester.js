"use strict";

var span = ["<span>", "</span>"];
var reverse = void 0,
    playPause = void 0,
    forward = void 0;
reverse = "<<";
playPause = ["play", "pause"];
forward = ">>";


var menu = ["<div class=\"ft_menu\">", span[0], "reverse ", span[1], span[0], playPause[0], span[1], span[0], " forward", span[1], "</div>"].join("");document.onkeydown = keyCheck;

var i = -1;
function keyCheck(e) {
    var keycode = window.event.keyCode;

    switch (keycode) {
        case 37:
            if (i > 0) i--;
            break;

        case 39:
            if (i < ft_fonts.length - 1 || i == -1) i++;
            break;

        case 82:
            i = Math.floor(Math.random() * ft_fonts.length - 1);
            break;

    }

    document.querySelectorAll('.' + targetClass).forEach(function (element) {
        element.style.fontFamily = ft_fonts[i];
    }, this);
}
var targetClass = "ft_target";

ft_fonts.pop();

document.addEventListener("click", function (event) {
    var t = event.target;

    if (t.classList.contains(targetClass)) t.classList.remove(targetClass);else t.classList.add(targetClass);
});

