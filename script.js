var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient")

// to check and confirm the above, we use console.log
// console.log(css);
// console.log(color1);
// console.log(color2);
// color1.addEventListener("input", function() {
//     console.log(color1.value);
// })
// color2.addEventListener("input", function() {
//     console.log(color2.value);
// })

function setGradient() {
    body.style.background =   
    "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";

    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient)

color2.addEventListener("input", setGradient)

// note: you can also use this (oninput="setGradient()") or (onclick="setGradient()") on the input element in the index.html.

// condition ? exp1 : exp2;













































function experiencePoints() {
    if (winBattle()) {
        return 10;
    } else {
        return 1;
    }
}

// function experiencePoints(okay) {
//     return okay;
// }

// var winner = experiencePoints(true) ? 10 : 1;


