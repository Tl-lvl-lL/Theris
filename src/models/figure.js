export default class Figure {
    constructor(color, name) {
        this.length = 4;
        this.color = color;
        this.name = name;
        this.height = 3;
        this.width = 3;
        this.superior = document.getElementById("game");
        this.limits = [];
    }

    setLocation() {
        let map = Array.from(this.superior.children);
        // Always on top

        //Considering the map is a square, i.e. L**2
        let side = Math.sqrt(map.length);
        if (Number.isInteger(side)) {
            // Minus two so that there are exacly big square is needed 8 spaces, but begins by 0
            let radomTileSelection = Math.round(Math.random() * (side - 3));
            console.log(`This is the random selection ${radomTileSelection}`);

            /*
            We know that figures has a pattern all has 4 square and moving inside of a big square (3 * 3), this means exist a center and how rotate is how it moves
             */

            // first we need create big square
            let bigSquare = map
                .slice(radomTileSelection, radomTileSelection + 3)
                .concat(
                    map.slice(
                        (radomTileSelection += 10),
                        radomTileSelection + 3
                    ),
                    map.slice(
                        (radomTileSelection += 10),
                        radomTileSelection + 3
                    )
                );

            // create figure inside of big square
            let t = bigSquare.slice(0, 3).concat(bigSquare[4], bigSquare[7]);

            t.forEach((x) => (x.style.backgroundColor = "green"));

            return [t, bigSquare];
        }
    }

    setPosition() {
        let [figure, bigSquare] = this.setLocation();

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

        let t;
        let position = 0;

        document.addEventListener("keyup", (e) => {
            switch (position) {
                case 0:
                    bigSquare.forEach(
                        (e) => (e.style.backgroundColor = "yellow")
                    );
                    console.log("original position");
                    t = bigSquare
                        .slice(0, 3)
                        .concat(bigSquare[4], bigSquare[7]);

                    this.limits = bigSquare.slice(0, 3).concat(bigSquare[7]);

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

                    this.limits = bigSquare.slice(3, 6).concat(bigSquare[8]);

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

                    this.limits = bigSquare.slice(6, 9).concat(bigSquare[1]);

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

                    this.limits = bigSquare.slice(3, 6).concat(bigSquare[6]);

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
        });
    }

    getPosition() {
        return "Orientation X and Y";
    }

    getLocation() {
        return "An array of each square";
    }
}
