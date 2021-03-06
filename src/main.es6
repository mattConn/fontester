##include keyboard_control.es6

const targetClass = "ft_target";

// ft_fonts array will be generated by "fonts" task in makefile.
// fonts found in src/font_faces will be inserted into the array on build or running of fonts task.
// let ft_fonts = [];

// remove dummy item from ft_fonts
ft_fonts.pop();

// user instructions
const instructions = "Click on a text element (or a text element's parent) to select it for a font change.\nClick on it again to deselect it.\n\nOnce selected, use the following controls:\n\narrow keys - cycle through fonts (font names will appear in console)\nr - get random font\nl - list all fonts in console\ns - set font by font name (case-sensitive)\nh - display this message in alert";
console.log(instructions);

document.addEventListener("click",function(event){
    let t = event.target;

    if (t.classList.contains(targetClass))
	{
        t.classList.remove(targetClass);
		t.style.cursor = "auto";
	}
    else
	{
        t.classList.add(targetClass);
		t.style.cursor = "crosshair";
	}
});
