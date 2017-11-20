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

    case 82:  // r for random 
        i = Math.floor(Math.random() * ft_fonts.length - 1);
    break;

	case 72: // h for help
		alert(instructions);
	break;

    case 83:  // s to set font 
		let font = prompt("Enter name of font:");
		let error = "Could not find font \"${font}.\""

		if(ft_fonts.indexOf(font) > -1)
			i = ft_fonts.indexOf(font)
		else
			alert(`Could not find font \"${font}\".`);
		
    break;

	case 76: // l to list
		console.log(ft_fonts.join('\n'));
	break;

  }

    document.querySelectorAll('.'+targetClass).forEach(function(element) {
        element.style.fontFamily = ft_fonts[i];
    }, this);
	
	console.log(ft_fonts[i]);
}
