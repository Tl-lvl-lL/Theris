window.addEventListener("load", () => {
    (function canvas(numeroDeElemetos) {
        let section = document.querySelector("section");
        for (let i = 0; i < numeroDeElemetos; i++) {
            let canvasBlock = document.createElement("span");
            canvasBlock.className = "canvas-block";
            section.appendChild(canvasBlock);
        }
    })(100);
});
