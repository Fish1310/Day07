let deleteButtons = document.querySelectorAll(".delete-btn");
let likeButtons = document.querySelectorAll(".like-btn");

deleteButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        let item = button.closest(".item");
        item.remove();
    });
});

likeButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        button.classList.toggle("is-active");
    });
});

let plusButtons = document.querySelectorAll(".plus-btn");
let minusButtons = document.querySelectorAll(".minus-btn");

plusButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        let quantityInput = button.parentElement.querySelector("input[name='name']");
        quantityInput.value = parseInt(quantityInput.value) + 1;
    });
});

minusButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        let quantityInput = button.parentElement.querySelector("input[name='name']");
        let currentValue = parseInt(quantityInput.value);
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
        }
    });
});