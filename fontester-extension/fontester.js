"use strict";

document.onkeydown = keyCheck;

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

    case 72:
      alert(instructions);
      break;

    case 83:
      var font = prompt("Enter name of font:");
      var error = "Could not find font \"${font}.\"";

      if (ft_fonts.indexOf(font) > -1) i = ft_fonts.indexOf(font);else alert("Could not find font \"" + font + "\".");

      break;

    case 76:
      console.log(ft_fonts.join('\n'));
      break;

  }

  document.querySelectorAll('.' + targetClass).forEach(function (element) {
    element.style.fontFamily = ft_fonts[i];
  }, this);

  console.log(ft_fonts[i]);
}

var targetClass = "ft_target";

ft_fonts.pop();

var instructions = "Click on a text element (or a text element's parent) to select it for a font change.\nClick on it again to deselect it.\n\nOnce selected, use the following controls:\n\narrow keys - cycle through fonts (font names will appear in console)\nr - get random font\nl - list all fonts in console\ns - set font by font name (case-sensitive)\nh - display this message in alert";
console.log(instructions);

document.addEventListener("click", function (event) {
  var t = event.target;

  if (t.classList.contains(targetClass)) {
    t.classList.remove(targetClass);
    t.style.cursor = "auto";
  } else {
    t.classList.add(targetClass);
    t.style.cursor = "crosshair";
  }
});

