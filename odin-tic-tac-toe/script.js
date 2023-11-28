function createUser(name, sign) {
  const username = name;
  const usersymbol = sign;
  return { username, usersymbol };
}

const player1 = createUser("John", "X");
const player2 = createUser("Trisha", "O");
container = document.querySelector(".container");
container.style.display = "grid";
container.style.height = "100vh";
let sizeX = 0;
let sizeY = 0;
const size = 3;
for (sizeX = 0; sizeX < size; sizeX += 1) {
  for (sizeY = 0; sizeY < size; sizeY += 1) {
    const content = document.createElement("div");
    content.setAttribute("id", `${sizeX}${sizeY}`);
    content.classList.add("content");
    content.setAttribute(
      "style",
      "opacity: 1; transition: 0.2s ease; background:white; border:black;"
    );
    content.style.gridColumnStart = sizeX + 1;
    content.style.gridRowStart = sizeY + 1;
    // content.addEventListener("click", () => {
    //   content.innerHTML = "X";
    //   content.style.opacity = 1;
    // });
    container.appendChild(content);
  }
}
let gameOver = 0;
function checkThrees(cellIds, symbol) {
  if (
    (cellIds.includes("00") &&
      cellIds.includes("01") &&
      cellIds.includes("02")) ||
    (cellIds.includes("10") &&
      cellIds.includes("11") &&
      cellIds.includes("12")) ||
    (cellIds.includes("20") && cellIds.includes("21") && cellIds.includes("22"))
  ) {
    alert(`Game Over! ${symbol} wins`);
    gameOver = 1;
  } else if (
    (cellIds.includes("00") &&
      cellIds.includes("10") &&
      cellIds.includes("20")) ||
    (cellIds.includes("01") &&
      cellIds.includes("11") &&
      cellIds.includes("21")) ||
    (cellIds.includes("02") && cellIds.includes("12") && cellIds.includes("22"))
  ) {
    alert(`Game Over! ${symbol} wins`);
    gameOver = 1;
  } else if (
    (cellIds.includes("00") &&
      cellIds.includes("11") &&
      cellIds.includes("22")) ||
    (cellIds.includes("02") && cellIds.includes("11") && cellIds.includes("20"))
  ) {
    alert(`Game Over! ${symbol} wins`);
    gameOver = 1;
  }
}
let ex = true;
const exarray = [];
const oarray = [];
let clickCount = 0;

container.addEventListener("click", (e) => {
  // e = event object
  if (
    e.target &&
    e.target.matches(".content") &&
    e.target.style.background !== "gold"
  ) {
    const content = e.target;
    const cellId = content.id;
    if (ex === true) {
      content.innerHTML = "x";
      exarray.push(cellId);
    } else {
      content.innerHTML = "0";
      oarray.push(cellId);
    }

    content.style.background = "gold";
    checkThrees(exarray, "x");
    checkThrees(oarray, "o");
    clickCount += 1;
    if (clickCount === 9 && gameOver !== 1) {
      alert("It's a Tie!");
    }
    ex = !ex;
  }
});
alert("Start!");
