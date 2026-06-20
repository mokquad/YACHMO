document.addEventListener("DOMContentLoaded", () => {
    const firmwaresButton = document.getElementById("firmwares-button");
    const modal = document.getElementById("firmwareModal");
    const closeButton = document.querySelector(".close");

    firmwaresButton.addEventListener("click", (event) => {
        event.preventDefault();
        modal.style.display = "block";
        setTimeout(() => {
            modal.classList.add("show");
        }, 10);
    });

    closeButton.addEventListener("click", () => {
        modal.classList.remove("show");
        modal.classList.add("hide");
        setTimeout(() => {
            modal.classList.remove("hide");
            modal.style.display = "none";
        }, 200);
    });

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.classList.remove("show");
            modal.classList.add("hide");
            setTimeout(() => {
                modal.classList.remove("hide");
                modal.style.display = "none";
            }, 200);
        }
    });
});
