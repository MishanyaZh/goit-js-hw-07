console.log("hello");

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsRef = document.querySelector('#ingredients');
// console.log(ingredientsRef);

const elements = ingredients.map(ingredient => {
  
    const ingrEl = document.createElement('li');
    ingrEl.textContent = ingredient;
   console.log(ingrEl);

    return ingrEl;
});

ingredientsRef.append(...elements);
// console.log(ingredientsRef);

