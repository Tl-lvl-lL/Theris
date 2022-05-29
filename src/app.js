class Canvas {
    #modes = { 1: "normal", 2: "free", 3: "hard" };
    #controls = {
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
    };
    #score = 0;
    constructor({ size = 100, mode = 1 }) {
        this.size = size;
        this.mode = this.#modes[mode];
    }
    get score() {
        return this.#score;
    }

    set score(value) {
        this.#score = value;
    }
}
