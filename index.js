// different methods to choose elements in document

//1. getElementById
//

// const title = document.getElementById("title");

// console.log("title", title);

//2. getElementsByClassName

// const mainContainer = document.getElementsByClassName("list");
// console.log("main container", mainContainer);

// 3. getElemetByTagname

// const heading = document.getElementsByTagName("li");
// console.log("heading", heading);

// 4. query selector --> it matches the first item in the list
// const div = document.querySelector("div");
// console.log("div", div);

//5. queryselectorAll it will return me all the matched elemnts

// const div = document.querySelectorAll("div");

// console.log("div", div);

//STYLING ELEMENTS
// we acess css properties in js

// const title = document.querySelector("#title");

// title.style.color = "red";

// const list = document.querySelectorAll("li");
// console.log("list", list);

// // list.style.color = "pink";

// for (i = 0; i < list.length; i++) {
//   list[i].style.fontSize = "3rem";
// }

// CREATING ELEMENTS

// const ul = document.querySelector("ul");
// const li = document.createElement("li");
// li.innerText = "Apple";
// //modifying attribute and classes
// li.setAttribute("id", "last-li");
// li.removeAttribute("id");
// ul.append(li);

// // remove element
// li.remove();
// // modify text
// const title = document.getElementById("title");
// console.log("title", title.innerHTML);
// console.log("title innerText-->", title.innerText);
// console.log("title textContent-->", title.textContent);

// add event Listener
// const btn = document.getElementById("btn");

// // Syntax --> Element.addEventListener("click",function)

// function mytest() {
//   alert("hello I am clicked");
// }

// btn.addEventListener("click", mytest);
