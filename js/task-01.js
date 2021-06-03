// console.log("hello)");

// 1
// const amountCatRef = document.querySelectorAll('li.item');
// // console.log(amountCatRef.length);
// const amountCatRefLeng = amountCatRef.length;
// console.log(`В списке ${amountCatRefLeng} категории`);

//1.1
const categorRef = document.querySelector('#categories');
// console.log(categorRef.children.length);
const amountCat = categorRef.children.length;
console.log(`В списке ${amountCat} категории`);


//2
const itemRef = document.querySelectorAll('li.item');
// // console.log(itemRef[0]);

const titelFirstRef = itemRef[0].querySelector('h2');
console.log(`Категория: ${titelFirstRef.textContent}`);

const itemFirst = itemRef[0].querySelectorAll('li');
console.log(`Количество элементов: ${itemFirst.length}`);


const titelSecondRef = itemRef[1].querySelector('h2');
console.log(`Категория: ${titelSecondRef.textContent}`);

const itemSecond = itemRef[1].querySelectorAll('li');
console.log(`Количество элементов: ${itemSecond.length}`);


const titelThirdRef = itemRef[2].querySelector('h2');
console.log(`Категория: ${titelThirdRef.textContent}`);

const itemThird = itemRef[2].querySelectorAll('li');
console.log(`Количество элементов: ${itemThird.length}`);
