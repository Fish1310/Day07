let button90add = document.getElementById("rotate-add-90")
let button90sub = document.getElementById("rotate-sub-90")
let button45add = document.getElementById("rotate-add-45")
let button45sub = document.getElementById("rotate-sub-45")
let resetpos = document.getElementById("rotate-reset")
let circle = document.getElementById("circle")

button90add.onclick = function() {
    circle.style.transform = "rotate(90deg)";
    return button90add
}

button90sub.onclick = function () {
    circle.style.transform = "rotate(-90deg)";
    return button90sub
}

button45add.onclick = function () {
    circle.style.transform = "rotate(45deg)";
    return button45add
}

button45sub.onclick = function () {
    circle.style.transform = "rotate(-45deg)";
    return button45sub
}

resetpos.onclick = function () {
    circle.style.transform = "rotate(0deg)";
    return resetpos
}

