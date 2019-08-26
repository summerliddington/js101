console.log("hello main.js");

let name = "Brenda";



const sectionEl = document.querySelector(".article__section");

console.log("the result of sectionEl:", sectionEl);

const footerEl = document.querySelector(".article__footer")

const smallTextEl = document.querySelector(".smallText")
smallTextEl.classList.remove("smallText")
smallTextEl.classList.add("largeText")

console.log("what is .smallText", smallTextEl);
