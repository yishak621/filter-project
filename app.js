//console.log([...products]);
arrayProducts = [...products];

const grid = document.querySelector('.grid');
const article = document.querySelector('.article');
const title = document.querySelector('.title');
const price = document.querySelector('.price');

grid.innerHTML = arrayProducts
  .map((articles) => {
    const { title, image, price } = articles;
    return ` <article class="article">
          <picture> <img src="${image}" alt="image" /></picture>
          <p class="title">${title}</p>
          <p class="price">${price}$</p>
        </article>`;
  })
  .join('');
console.log(grid);

//for our buttons
const buttons = document.querySelector('.buttons');

function displaymenuButtons() {
  const companyBtn = arrayProducts.reduce(
    (values, items) => {
      if (!values.includes(items.company)) {
        values.push(items.company);
      }
      return values;
    },
    ['all']
  );
  console.log(companyBtn);
  buttons.innerHTML = companyBtn
    .map((company) => {
      return `<div class="buttons">
          <button class="btn">${company}</button>
        </div>`;
    })
    .join('');
}

window.addEventListener('DOMContentLoaded', function () {
  displaymenuButtons();
});
