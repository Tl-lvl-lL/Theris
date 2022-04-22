export default class Figure {
    /**
     * It would inheritence the next values
     *  Canva limits
     *  Canva Elements
     *  Canva Background Color
     * */
    constructor(color, name) {
        this.length = 4;
        this.color = color;
        this.name = name;
        this.height = 3;
        this.width = 3;
        this.canvaGrid = Array.from(document.getElementById("game").children);
        this.rightSideStop = Math.sqrt(this.canvaGrid.length);
        this._position = 90 * Math.round(Math.random() * 3);
        this._location = Math.round(Math.random() * (this.rightSideStop - 3));

        //Considering the this.canvaGrid is a square, i.e. L**2

        this.limits = [];
    }

    container() {
        return this.canvaGrid
            .slice(this._location, this._location + 3)
            .concat(
                this.canvaGrid.slice(
                    (this._location += 10),
                    this._location + 3
                ),
                this.canvaGrid.slice((this._location += 10), this._location + 3)
            );
    }
    // To move we need to know Location and position, apart of direction
    sidewayMove() {
        /**
         * Move the figure when I press key ArrowLeft || ArrowRight
         *
         * if figure go to right we add 1 to its position
         *
         * if figure go to left we rest 1 to its potision
         *
         * after moving we restore color
         */
        let [figure, container] = this.setLocation();
        console.log(figure);
        let iterator = figure.entries();
        let locationElements = [];
        // let { figurePosition, bigSquare } = this.setPosition();

        // figurePosition.forEach((e) => console.log(e));
        /**
         * 
         * console.log(typeof iterator.next().value[1]);
            figure.forEach((e) => console.log(e));
            console.log(typeof this.canvaGrid[3]);
            this.canvaGrid.forEach((e) => console.log(e));
        */
        for (let i = 0; i < figure.length; i++) {
            let ele = this.canvaGrid.indexOf(iterator.next().value[1]);
            locationElements.push(ele);
        }

        console.log(locationElements);
        document.addEventListener("keyup", (e) => {
            if (e.key == "ArrowRight") {
                // reset before colors
                this.canvaGrid.forEach(
                    (containerElem) =>
                        (containerElem.style.backgroundColor = "yellow")
                );
                if (locationElements[2] <= this.rightSideStop - 2) {
                    console.log(locationElements[2]);
                    locationElements = locationElements.map((x) => (x += 1));

                    locationElements.forEach((e) => {
                        this.canvaGrid[e].style.backgroundColor = "green";
                    });
                }
            } else if (e.key == "ArrowLeft") {
                // reset before colors
                this.canvaGrid.forEach(
                    (containerElem) =>
                        (containerElem.style.backgroundColor = "yellow")
                );
                // Error : Wrong tiles ; Recomend add 3
                if (locationElements[0] > 0) {
                    console.log(locationElements[2]);
                    locationElements = locationElements.map((x) => (x -= 1));

                    locationElements.forEach((e) => {
                        this.canvaGrid[e].style.backgroundColor = "green";
                    });
                }
            }
        });

        return locationElements;
    }

    setLocation() {
        // left to do dynamic canvas, now I work with 10 times 10
        if (Number.isInteger(this.rightSideStop)) {
            // Minus two so that there are exacly big square is needed 8 spaces, but begins by 0
            let radomTileSelection = Math.round(
                Math.random() * (this.rightSideStop - 3)
            );
            console.log(`This is the random selection ${radomTileSelection}`);

            /*
            We know that figures has a pattern all has 4 square and moving inside of a big square (3 * 3), this means exist a center and how rotate is how it moves
             */

            // first we need create big square
            let bigSquare = this.canvaGrid
                .slice(radomTileSelection, radomTileSelection + 3)
                .concat(
                    this.canvaGrid.slice(
                        (radomTileSelection += 10),
                        radomTileSelection + 3
                    ),
                    this.canvaGrid.slice(
                        (radomTileSelection += 10),
                        radomTileSelection + 3
                    )
                );

            // create figure inside of big square
            // let t = bigSquare.slice(0, 3).concat(bigSquare[4], bigSquare[7]);

            // t.forEach((x) => (x.style.backgroundColor = "green"));

            return bigSquare;
        }
    }

    setPosition() {
        let bigSquare = this.setLocation();
        console.log(bigSquare);
        // let indexSquare = this.sidewayMove();

        // let bigSquare = this.canvaGrid
        //     .slice(indexSquare[0], indexSquare[2] + 1)
        //     .concat(
        //         this.canvaGrid.slice(indexSquare[3] - 2, indexSquare[3] + 1),
        //         this.canvaGrid.slice(indexSquare[4] - 2, indexSquare[4] + 1)
        //     );

        // bigSquare.forEach((e) => console.log(e));
        // console.log(ObigSquare.length);

        // for (let i = 0; i < indexSquare.length; i++) {
        //     let ele = this.canvaGrid.indexOf(iterator.next().value[1]);
        //     locationElements.push(ele);
        // }
        /**
         * when press a Up tile change position
         *
         * position from 0 to 360
         *
         * switch :
         *  case(0)
         *  case(360):
         *         original position
         *  case(90):
         *         horizontal position +x
         *  case(180):
         *         turned around vertical position
         *  case(270):
         *         horizontal position -x
         *
         */

        // reset
        bigSquare.forEach((e) => (e.style.backgroundColor = "yellow"));

        let t; // It means figure T
        let position = 90 * Math.round(Math.random() * 3);

        bigSquare.forEach((e) => (e.style.backgroundColor = "yellow"));
        console.log("original position");
        t = bigSquare.slice(0, 3).concat(bigSquare[4], bigSquare[7]);

        t.forEach((x) => (x.style.backgroundColor = "green"));
        this.limits = bigSquare.slice(0, 3).concat(bigSquare[7]);
        console.log(position);
        document.addEventListener("keyup", (e) => {
            if (e.key == "ArrowUp") {
                switch (position) {
                    case 0:
                        bigSquare.forEach(
                            (e) => (e.style.backgroundColor = "yellow")
                        );
                        console.log("original position");
                        t = bigSquare
                            .slice(0, 3)
                            .concat(bigSquare[4], bigSquare[7]);

                        console.log(t);
                        this.limits = bigSquare
                            .slice(0, 3)
                            .concat(bigSquare[7]);

                        t.forEach((x) => (x.style.backgroundColor = "green"));
                        break;
                    case 90:
                        bigSquare.forEach(
                            (e) => (e.style.backgroundColor = "yellow")
                        );
                        console.log("horizontal position +x");

                        t = bigSquare
                            .slice(3, 6)
                            .concat(bigSquare[2], bigSquare[8]);

                        this.limits = bigSquare
                            .slice(3, 6)
                            .concat(bigSquare[8]);

                        t.forEach((x) => (x.style.backgroundColor = "green"));
                        break;
                    case 180:
                        bigSquare.forEach(
                            (e) => (e.style.backgroundColor = "yellow")
                        );
                        console.log("turned around vertical position");
                        t = bigSquare
                            .slice(6, 9)
                            .concat(bigSquare[4], bigSquare[1]);

                        this.limits = bigSquare
                            .slice(6, 9)
                            .concat(bigSquare[1]);

                        t.forEach((x) => (x.style.backgroundColor = "green"));
                        break;
                    case 270:
                        bigSquare.forEach(
                            (e) => (e.style.backgroundColor = "yellow")
                        );
                        console.log("horizontal position -x");
                        t = bigSquare
                            .slice(3, 6)
                            .concat(bigSquare[0], bigSquare[6]);

                        this.limits = bigSquare
                            .slice(3, 6)
                            .concat(bigSquare[6]);

                        t.forEach((x) => (x.style.backgroundColor = "green"));
                        break;

                    default:
                        break;
                }

                if (position >= 270) {
                    position = 0;
                } else {
                    position += 90;
                }
            }
        });

        console.log(bigSquare);
        return { t, bigSquare };
    }

    get position() {
        console.log("Orientation X and Y");
        return this._position;
    }

    get location() {
        console.log("An array of each square");
        return this._location;
    }

    resetColors() {}
}
