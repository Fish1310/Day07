    let square = document.getElementById("square");

    function reduceOpacity() {
        
        square.style.opacity = 0.5;
        
    }
    function resetOpacity() {
        square.style.opacity = 1;
    }

    square.addEventListener("mouseover", reduceOpacity);
    square.addEventListener("mouseout", resetOpacity);