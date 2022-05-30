window.addEventListener("load", () => {
    (function canvas(numeroDeElemetos) {
        let section = document.querySelector("section");
        for (let i = 0; i < numeroDeElemetos; i++) {
            let canvasBlock = document.createElement("span");
            canvasBlock.className = "canvas-block";
            section.appendChild(canvasBlock);
        }
    })(100);
    let element = new Figure({ color: "marron", name: "persia" });

    let intervalId = element.moveY();
    // let intervalId = element.moveX(element.location(), element.location());
    console.log(intervalId);
    document.getElementById("cancel").addEventListener("click", (e) => {
        clearInterval(intervalId);
    });
});
