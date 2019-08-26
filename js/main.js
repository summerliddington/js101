
const name = "Summer"; 

const Header = document.querySelector("section.article__header"); 

console.log(Header);

Header.textContent = "Big Ol' Header";

console.log("does this work", Header);

const allHeaders = document.querySelectorAll(".article__header");
console.log(allHeaders);


for (let i = 0; i < allHeaders.length; i++){
    allHeaders[i].classList.add("important");

}

const asideBoxDark = document.querySelector(".aside_box--dark")
asideBoxDark.classList.remove("dashed")

const articleFooter = document.querySelector(".article__footer")
articleFooter.classList.add("goldenrod")
