import Canva from "../models/canva.js";
import Figure from "../models/figure.js";
const counter = 100;

for (let i = 0; i < counter; i++) {
    let e = document.createElement("div");
    e.setAttribute("id", i);
    e.style.border = "black solid 1px";
    e.style.height = "50px";
    e.style.width = "50px";

    document.getElementById("game").appendChild(e);
}

let game = new Canva(),
    fig = new Figure("green", "T");

// fig.setLocation();
fig.setPosition();

// game.start();
// game.move();
let bttn = document.getElementsByTagName("button").item(0);
bttn.addEventListener("click", (e) => {
    game.stop();
});

/*
 const frame = document.getElementById("game");

function childrenCreator(counter) {
    let children = [];
    for (let i = 0; i < counter; i++) {
        let e = document.createElement("div");

        e.style.border = "black solid 1px";
        e.style.height = "50px";
        e.style.width = "50px";

        children.push(e);
    }

    return children;
}

let countCreator = childrenCreator(100);

for (let j = 0; j < countCreator.length; j++) {
    frame.appendChild(countCreator[j]);
}

function ICreator() {
    let arrI = Array.from(frame.getElementsByTagName("div"));

    let initFigure = arrI.slice(0, 10);

    let from = Math.round(Math.random() * 6),
        to = from + 4;
    let figureI = initFigure.slice(from, to);

    /**
     * If uncomment these lines it stars painting the figure
     *
     
    for (const i of figureI) {
        i.style.backgroundColor = "yellow";
    }

    // let moving =;
    let interval = setInterval(() => {
        if (!(from >= 96)) {
            //&& to >= 90
            (from += 10), (to += 10);
            console.log(from, to);
            for (const i of arrI.slice(from, to)) {
                i.style.backgroundColor = "yellow";
                arrI.slice(from - 10, to - 10).forEach((e) => {
                    e.style.backgroundColor = "transparent";
                });

                document.addEventListener("keyup", (e) => {
                    e.defaultPrevented;
                    // from -1 -> +10 -> -10 -> -10
                    let IUp = [];
                    let medium = from - 1,
                        upMedium = medium - 10;

                    IUp.push(arrI[medium]);
                    IUp.push(arrI[(medium += 10)]);
                    IUp.push(arrI[(medium -= 10)]);
                    IUp.push(arrI[(medium -= 10)]);

                    IUp.forEach((x) => (x.style.backgroundColor = "green"));
                });
            }
        }
    }, 2000);

    return interval;
}

//     try{

// }catch(e){
//         console.log(e);
//     }finally{}

let inter = ICreator();
function stopGame(interval) {
    clearInterval(interval);
}
function moveFigure() {
    // location, orientation = rigth , grades = 90
    // let arrI = Array.from(frame.getElementsByTagName("div")));
}
let bttn = document.getElementsByTagName("button").item(0);
bttn.addEventListener("click", (e) => {
    stopGame(inter);
});
/**
 * Class Figure
 *
 *      creator -> define where where init and end in row
 *                  - Each one must to have a different inicializer
 *      trigger -> the figure start to come down
 *      move -> 90 grades
 *
 * ModelI
 *
 * ModelJ
 *
 *          -
 */
