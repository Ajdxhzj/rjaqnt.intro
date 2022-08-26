const images = [`background1.jpg`, `background2.jpg`, `background3.jpg`, `background4.jpg`, `background5.jpg`, `background6.jpg`, `background7.jpg`];

const randomImage = images[Math.floor(Math.random() * images.length)];

const backgroundImg = document.createElement(`img`);

backgroundImg.src = `images/${randomImage}`;

const bg=`background`

backgroundImg.className=bg;

document.body.appendChild(backgroundImg);