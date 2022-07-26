const body = document.querySelector("#body");
const main = document.createElement("main");

for (let index = 1; index <= 6; index++) {
  const img1 = document.createElement("img");
  img1.src = `./img/${index}.webp`;
  img1.alt = "Imagen";
  main.classList.add("gallery");
  main.appendChild(img1);
  body.append(main);
}

console.log(body);
console.log(main);
