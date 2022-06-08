import Figure from "./figure.js";
export default class Canvas {
    #modes = { 1: "normal", 2: "free", 3: "hard" };
    #controls = {
        default: {
            left: "ArrowLeft",
            right: "ArrowRight",
            up: "ArrowUp",
            down: "ArrowDown",
        },
        custom: {
            right: "d" || "D",
            left: "a" || "A",
            up: "w" || "W",
            down: "s" || "S",
        },
    };
    #score;
    constructor(size = 100, mode = 1, controls = "default") {
        this.#score = 0;
        this.size = size;
        this.mode = this.#modes[mode];
        this.election =
            controls != "default"
                ? this.#controls.custom
                : this.#controls.default;
        this.section = document.querySelector("section");
    }
    get score() {
        return this.#score;
    }

    set score(value) {
        this.#score = value;
    }
    CreateCanvas() {
        for (let i = 0; i < this.size; i++) {
            let canvasBlock = document.createElement("span");
            canvasBlock.className = "canvas-block";
            this.section.appendChild(canvasBlock);
        }
    }

    Star() {
        let figure = new Figure();
        figure.paint();
        let { up, down, left, right } = this.election;
        figure.move(left, right, up, down);
        figure.fall();
    }
}
