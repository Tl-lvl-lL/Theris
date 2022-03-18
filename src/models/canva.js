export default class Canva {
    static #from;
    static #to;
    constructor() {
        // this.#from;
        // this.#to;
        this.frame = document.getElementById("game");
        this.arrModelI = Array.from(this.frame.getElementsByTagName("div"));
        this.interval;
        this.dynamicFigure = this.arrModelI.slice(this.getFrom, this.getTo);

        // Draw figure on the grid
        this.initializer();
    }

    static {
        this.#from = Math.round(Math.random() * 6);
        this.#to = this.#from + 4;
    }

    initializer() {
        this.dynamicFigure.forEach((i) => {
            i.style.backgroundColor = "yellow";
        });
    }

    start() {
        this.interval = setInterval(() => {
            if (!(this.getFrom > 96)) {
                for (let n of this.dynamicFigure) {
                    n.style.backgroundColor = "green";
                }
                Canva.#from += 10;
                Canva.#to += 10;
                this.dynamicFigure.forEach((e) => {
                    console.log(e.getAttribute("id"));
                });
            }
            //     if (!(this.getFrom >= 96)) {
            //         // 96 because from never migth pass last row
            //         // console.log(this.getFrom, this.getTo);
            //         // console.log(this.dynamicFigure);
            //         for (const i of this.dynamicFigure) {
            //             i.style.backgroundColor = "yellow";
            //             console.log(i);
            //             this.arrModelI
            //                 .slice(this.getFrom - 10, this.getTo - 10)
            //                 .forEach((e) => {
            //                     e.style.backgroundColor = "pink";
            //                 });
            //         }
            //     }
        }, 2000);
    }
    stop() {
        clearInterval(this.interval);
    }
    move() {
        document.addEventListener("keyup", () => {
            let block1 = this.#to - 1;
            let [block2, block3, block4] = [
                block1 - 10,
                block1 - 20,
                block1 + 10,
            ];
            console.log(block1, block2, block3, block4);
            console.log(this.dynamicFigure);
        });
    }
}

/**
 *                    // document.addEventListener("keyup", (e) => {
                    //     e.defaultPrevented;
                    //     // this.getFrom -1 -> +10 -> -10 -> -10
                    //     let IUp = [];
                    //     let medium = this.getFrom - 1,
                    //         upMedium = medium - 10;

                    //     IUp.push(this.arrModel[medium]);
                    //     IUp.push(this.arrModel[(medium += 10)]);
                    //     IUp.push(this.arrModel[(medium -= 10)]);
                    //     IUp.push(this.arrModel[(medium -= 10)]);

                    //     IUp.forEach((x) => (x.style.backgroundColor = "green"));
                    // });
                    console.log(i);
 
*/
