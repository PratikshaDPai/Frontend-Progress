container = document.querySelector("#container");
const content = document.createElement("div");
content.classList.add("content");
container.appendChild(content);

const para = document.createElement("p");
para.style.color = "red";
para.textContent = "Hey I'm Red!";
content.appendChild(para);

const h3 = document.createElement("h3");
h3.style.color = "blue";
h3.textContent = "Hey, I'm a blue h3!";
content.appendChild(h3);

const div = document.createElement("div");
div.setAttribute("style", "border:2px solid black; background:pink;");
const h1 = document.createElement("h1");
h1.textContent = "I'm in a div!";
const para2 = document.createElement("p");
para2.textContent = "ME TOO!";
content.appendChild(div);
div.appendChild(h1);
div.appendChild(para2);

const btn = document.querySelector("#btn");
btn.addEventListener("click", function (e) {
  alert("Hi!");
  e.target.style.background = "green";
  console.log(e.target);
});
