
const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.preventDefault();

        document.querySelector(".selected")?.classList.remove("selected");
        button.closest(".pricing-card").classList.add("selected");
    });
});
