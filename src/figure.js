class Figure {
    #piezas = 4;
    #canvas = Array.from(document.getElementsByClassName("canvas-block"));
    constructor({ color, name }) {
        this.color = color;
        this.name = name;
        this.grades = 0;
    }
    /**
     * Inicial State = RANDOM
     * Constant Movement
     * Independient
     */
    location() {
        let side = Math.sqrt(this.#canvas.length);

        let point = Math.round(Math.random() * (side - 3));
        if (point <= 0) point = 1;
        console.log(point);
        // tester
        point = 1;
        return [
            point - 1,
            point,
            point + 1,
            side + point - 1,
            side + point,
            side + point + 1,
            side * 2 + point - 1,
            side * 2 + point,
            side * 2 + point + 1,
        ];
    }
    /**
     * Note
     *  Paint and Unpaint
     * */
    paint(arr, color = "black") {
        arr.forEach((e) => {
            this.#canvas[e].style.backgroundColor = color;
        });
    }

    unpaint(arr) {
        arr.forEach((e) => {
            this.#canvas[e].style.backgroundColor = "white";
        });
    }
    /**
     * Both (X & Y) depends of location & rotate
     * */

    //antes y despues
    moveY() {
        let initialLocation = this.location();
        // this.draw(initialLocation, "black");

        let dynamicLocation = initialLocation;
        let additionalLocation = this.moveX(initialLocation, dynamicLocation);
        let interval = setInterval(() => {
            // this.unpaint(dynamicLocation);
            // dynamicLocation += additionalLocation;
            dynamicLocation = dynamicLocation.map((p) => {
                if (p >= 81) {
                    // Last block
                    clearInterval(interval);
                }
                console.log(`1${additionalLocation}`);
                return (p += parseInt(`1${additionalLocation}`));
            });
            console.log(dynamicLocation);
            // this.draw(dynamicLocation, "black");
        }, 2000);

        return interval;
    }
    moveX(initialArr, dynamic) {
        let newArr = dynamic;

        let additing = 0;
        document.addEventListener("keydown", (ev) => {
            ev.preventDefault();
            switch (ev.key) {
                case "ArrowLeft":
                    if (initialArr[0] > 0) {
                        // newArr = newArr.map((item) => (item -= 1));
                        additing -= 1;
                        initialArr[0]--;
                        initialArr[2]--;
                    }
                    // console.log(initialArr, newArr, dynamic);
                    break;
                case "ArrowRight":
                    if (initialArr[2] < 10) {
                        additing += 1;
                        // newArr = newArr.map((item) => (item += 1));
                        initialArr[0]++;
                        initialArr[2]++;
                    }
                    // console.log(initialArr, newArr);
                    // console.log(initialArr, newArr, dynamic);
                    break;

                default:
                    console.log("No carnal");
                    break;
            }
        });
        return additing;
    }
    /**
     * Inicial State = RANDOM
     * spectate location() change
     * Depends of key press
     */
    rotate() {
        document.addEventListener("keydown", (ev) => {
            ev.preventDefault();
            switch (ev.key) {
                case "ArrowUp":
                    if (!(this.grades <= 360)) this.grades += 90;
                    break;
                case "ArrowDown":
                    if (!(this.grades >= 0)) this.grades -= 90;
                    break;

                default:
                    console.log("No carnal");
                    break;
            }
        });
    }
}
