// import example from "./images/smoke.png";
// import imgSvg from "./images/flat.svg";
// import { sum } from "./helper/sum.js";
// import "./styles/main.scss";

// console.log("Webpack");
// // // Create a class property without a constructor
// class Game {
//   name = "Violin Charades";
// }
// const myGame = new Game();
// // Create paragraph node
// const p = document.createElement("p");
// p.textContent = `I like ${myGame.name}.`;

// // Create heading node
// const heading = document.createElement("h1");
// heading.textContent = "Interesting!";

// // Append SVG and heading nodes to the DOM
// const app = document.querySelector("#root");
// app.append(heading, p);

// const img = document.createElement("img");
// img.src = example;
// app.append(img);

// const svgImg = document.createElement("img");
// svgImg.src = imgSvg;
// app.append(svgImg);

// console.log(sum(2, 3));


import './styles/style.css';
import {base, list, frameworks, libs} from "./data/hbsData.js";
import hbs from "./template/secondtask.hbs";
import thirdTask from "./template/thirdtask.hbs";
import userForm from "./template/firsttask.hbs";
import libsll from "./template/forthtask.hbs";


const root = document.querySelector("#root");
const user = userForm(base);
const markUp = hbs(list);
const libsList = libsll(libs);


root.insertAdjacentHTML('beforeend', user);
root.insertAdjacentHTML('beforeend', markUp);
const frameworksList = thirdTask(frameworks);
root.insertAdjacentHTML('beforeend', frameworksList);
root.insertAdjacentHTML('beforeend', libsList);


