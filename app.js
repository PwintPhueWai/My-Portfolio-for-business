
let nowyear=new Date().getFullYear();
let born=new Date(1999,10,25).getFullYear();
let age=nowyear-born;
document.querySelector(".value").children[1].innerHTML=`<p id="age">${age}</p>`;