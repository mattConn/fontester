const span = ["<span>","</span>"];
let reverse, playPause, forward;
[reverse, playPause, forward] = ["<<",["play","pause"],">>"];

let menu = [
    "<div class=\"ft_menu\">",
        span[0],"reverse ", span[1],
        span[0],playPause[0], span[1],
        span[0]," forward", span[1],
    "</div>"
].join("");