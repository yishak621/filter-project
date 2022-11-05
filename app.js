//first we use spread operator to copy them to arrays and we use <let> declaration since in the filter section the products arrangment will be changed continuosly
//<!--TODO: VERY IMPORTANT if we didnt use a copy of our array ,then when we filter we reduce our array and even if we go back the array won't return to the first place
let filteredProducts = [...products];

//declaration
const productsContainer = document.querySelector('.products-container');

//function if there are no items
const displayProducts = () => {
  if (filteredProducts.length < 1) {
    productsContainer.innerHTML = `<p class="no-item">sorry,no items to be displayed</p>`;
    return;
  }

  //dynamic grid items
  productsContainer.innerHTML = filteredProducts
    .map(({ id, title, image, price }) => {
      //const { title, image, price } = product; we can use array destructuring this way or we can pass it directly in the parameter too
      return `<article class="product" data-id="${id}">
          <img
            src="${image}"
            class="product-img img"
            alt=""
          />
          <footer>
            <h5 class="product-name">${title}</h5>
            <span class="product-price">$${price}</span>
          </footer>
        </article>`;
    })
    .join('');
};
displayProducts();

//buttons
const companiesDOM = document.querySelector('.companies');

const displayButtons = () => {
  const buttons = [
    'all',
    ...new Set(
      products.map((product) => {
        return product.company;
      })
    ),
  ];
  //OUTPUT of buttons array ['all', 'ikea', 'marcos', 'caressa', 'liddy'] we can use reduce method if we want
  companiesDOM.innerHTML = buttons
    .map((company) => {
      return `<article class="companies">
          <button class="company-btn" data-id="${company}">${company}</button>
         </article>`;
    })
    .join('');
};
displayButtons();

//event listner for BUTTON
companiesDOM.addEventListener('click', (e) => {
  const el = e.target;
  console.log(el);
  if (el.classList.contains('company-btn')) {
    //case 1
    if (el.dataset.id === 'all') {
      filteredProducts = [...products];
    } else {
      //case 2
      filteredProducts = products.filter((product) => {
        return product.company === el.dataset.id;
      });
    }
    searchInput.value = ''; //clearing the input field texts
    displayProducts();
  }
});

//Filter when we enter text
const form = document.querySelector('.input-form');
const searchInput = document.querySelector('.search-input');

form.addEventListener('keyup', () => {
  //keyup event-fired when key is relesed
  const inputValue = searchInput.value.toLowerCase();
  console.log(inputValue);
  filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(inputValue); //if the input is empty it just returns all items
  });
  displayProducts(); //<!--TODO: important
});

//the OLD WAY to add buttons dynamically
// const displaybuttons = () => {
//   //the Filter is an copy of array from the filterproducts and we use it for a dynamic button
//   const Filter = filteredProducts.reduce(
//     (values, items) => {
//       if (!values.includes(items.company)) {
//         values.push(items.company); //if the value is not there ...add it
//       }
//       return values; //if it is there already pass it
//     },
//     ['All']
//   );
//   companies.innerHTML = Filter.map((item) => {
//     return `<article class="companies">
//           <button class="company-btn">${item}</button>
//         </article>`;
//   }).join('');
// };
