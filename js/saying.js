const sayings = [
  {
    saying: `You will face many defeats in life, but never let yourself be defeated.`,
    author: `Maya Angelou`,
  },
  {
    saying: `Life is either a daring adventure or nothing at all.`,
    author: `Helen Keller`,
  },
  {
    saying: `Being happy never goes out of style.`,
    author: `Lilly Pulitzer`,
  },
  {
    saying: `All you need in this life is ignorance and confidence; then success is sure.`,
    author: `Mark Twain`,
  },
  {
    saying: `I don't go by the rule book…I lead from the heart, not the head.`,
    author: `Princess Diana`,
  },
  {
    saying: `Life is a mountain. Your goal is to find your path, not to reach the top.`,
    author: `Maxime Lagacé`,
  },
  {
    saying: `Keep your eyes on the stars and your feet on the ground.`,
    author: `Theodore Roosevelt`,
  },
  {
    saying: `Despite the forecast, live like it's spring.`,
    author: `Lilly Pulitzer`,
  },
  {
    saying: `Success usually comes to those who are too busy to be looking for it.`,
    author: `Henry David Thoreau`,
  },
  {
    saying: `The way to get started is to quit talking and begin doing.`,
    author: `Walt Disney`,
  }
];

const saying = document.querySelector(`#saying span:first-child`);
const author = document.querySelector(`#saying span:last-child`);

const randomSaying = sayings[Math.floor(Math.random() * sayings.length)];

saying.innerText = randomSaying.saying;
author.innerText = randomSaying.author;