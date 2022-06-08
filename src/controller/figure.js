export default class Figure {
    #pieces;
    #canvas;
    #side;
    #point;
    #location;
    #grades;

    constructor(color = "black", name) {
        this.color = color;
        this.name = name;
        this.#canvas = Array.from(
            document.getElementsByClassName("canvas-block")
        );
        this.#pieces = 4;
        this.#side = Math.sqrt(this.#canvas.length);
        this.#point = Math.round(Math.random() * (this.#side - 2));
        this.#location =
            this.#point <= 0
                ? (this.#point = 1)
                : [
                      this.#point - 1,
                      this.#point,
                      this.#point + 1,
                      this.#side + this.#point - 1,
                      this.#side + this.#point,
                      this.#side + this.#point + 1,
                      this.#side * 2 + this.#point - 1,
                      this.#side * 2 + this.#point,
                      this.#side * 2 + this.#point + 1,
                  ];
        this.referencePoint = this.#point;
        this.#grades = 0;
    }
    get location() {
        return this.#location;
    }
    get pieces() {
        return this.#pieces;
    }
    get side() {
        return this.#side;
    }
    paint(color = "black") {
        this.#location.forEach((e) => {
            this.#canvas[e].style.backgroundColor = color;
        });
    }

    unpaint() {
        this.#location.forEach((e) => {
            this.#canvas[e].style.backgroundColor = "white";
        });
    }
    fall() {
        let interval = setInterval(() => {
            this.unpaint();
            this.#location = this.#location.map((p) => {
                if (p >= 81) {
                    clearInterval(interval);
                }
                return (p += 10);
            });
            // console.log(this.location);
            this.paint();
        }, 2000);
    }
    move(left, right, up, down) {
        // console.log(left, right);
        document.addEventListener("keydown", (ev) => {
            switch (ev.key) {
                case left:
                    this.unpaint();
                    if (this.referencePoint > 1) {
                        this.#location = this.#location.map(
                            (item) => (item -= 1)
                        );
                        this.referencePoint--;
                    }
                    this.paint();
                    break;
                case right:
                    this.unpaint();
                    if (this.referencePoint < 8) {
                        this.#location = this.#location.map(
                            (item) => (item += 1)
                        );
                        this.referencePoint++;
                    }
                    this.paint();
                    break;

                case up:
                    if (this.#grades <= 359) this.#grades += 90;
                    break;
                case down:
                    if (this.#grades >= 1) this.#grades -= 90;
                    break;
                default:
                    break;
            }
        });
    }
}
