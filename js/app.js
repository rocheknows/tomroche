const images = [
  "imgs/01.jpg",
  "imgs/02.jpg",
  "imgs/03.jpg",
  "imgs/04.jpg",
  "imgs/05.jpg",
  "imgs/06.jpg",
  "imgs/07.jpg",
  "imgs/08.jpg",
  "imgs/09.jpg",
  "imgs/10.jpg",
  "imgs/11.jpg",
  "imgs/12.jpg",
  "imgs/13.jpg",
  "imgs/14.jpg",
  "imgs/16.jpg",
  "imgs/17.jpg",
  "imgs/18.jpg",
  "imgs/19.jpg",
  "imgs/20.jpg",
  "imgs/21.jpg",
  "imgs/22.jpg",
  "imgs/23.jpg",
  "imgs/24.jpg",
  "imgs/25.jpg",
  "imgs/26.jpg",
  "imgs/27.jpg",
  "imgs/28.jpg",
  "imgs/29.jpg",
  "imgs/30.jpg",
  "imgs/31.jpg",
  "imgs/32.jpg",
  "imgs/33.jpg",
  "imgs/34.jpg",
  "imgs/35.jpg"
];

let i = 0;

function placeImage(x, y) {
  const nextImage = images[i];
  const img = document.createElement("img");
  img.setAttribute("src", nextImage);
  img.style.left = x + "px";
  img.style.top = y + "px";
  img.style.transform = "translate(-50%, -50%) scale(0.2)";
  document.body.appendChild(img);

  i = i + 1;
  if (i >= images.length) {
    i = 0;
  }
}

document.addEventListener("click", function(event) {
  //event.preventDefault();
  placeImage(event.pageX, event.pageY);
});

document.addEventListener("touchend", function(event) {
  event.preventDefault();
  placeImage(event.pageX, event.pageY);
});

const name = "Website developed by Tom Roche @ rocheknows studio ;)";

console.log(name);
