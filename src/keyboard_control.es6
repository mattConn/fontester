document.onkeydown = keyCheck;

let i = -1;
function keyCheck(e)
{
  let keycode = window.event.keyCode;

  switch (keycode)
  {
    case 37:  // left arrow
        if (i>0)
            i--;
    break;

    case 39:  // right arrow
        if (i<ft_fonts.length-1 || i == -1)
            i++;
    break;

    // case 76:  // l for list 
    //
    // break;

    // case 82:  // r for random 
    //
    // break;

    // case 72:  // h for help 
    //
    // break;

  }

    document.querySelectorAll('.'+targetClass).forEach(function(element) {
        element.style.fontFamily = ft_fonts[i];
    }, this);
}