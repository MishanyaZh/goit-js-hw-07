// console.log("hello)");

//amount categories
const categorRef = document.querySelector('#categories');

const amountCategories = categorRef.children.length;
console.log(`В списке ${amountCategories} категории`);

//name and amount
const totalAraysCategories = categorRef.children;
// console.log(totalAraysCategories);
const categories = [...totalAraysCategories];
    
//update 3.0 (В задании 1 вам не нужно возвращать новый массив, поэтому отлично подошел бы метод forEach)

categories.forEach(cat => {
    console.log(`Категория: ${cat.children[0].textContent}`);
    console.log(`Количество элементов: ${cat.children[1].children.length}`);
});




//version 2.0
// categories.map(cat => {
//     console.log(`Категория: ${cat.children[0].textContent}`);
//     console.log(`Количество элементов: ${cat.children[1].children.length}`);
// });


//old version
// 1
// const amountCatRef = document.querySelectorAll('li.item');
// // console.log(amountCatRef.length);
// const amountCatRefLeng = amountCatRef.length;
// console.log(`В списке ${amountCatRefLeng} категории`);

//1.1
// //2
// const itemRef = document.querySelectorAll('li.item');
// // // console.log(itemRef[0]);

// const titelFirstRef = itemRef[0].querySelector('h2');
// console.log(`Категория: ${titelFirstRef.textContent}`);

// const itemFirst = itemRef[0].querySelectorAll('li');
// console.log(`Количество элементов: ${itemFirst.length}`);


// const titelSecondRef = itemRef[1].querySelector('h2');
// console.log(`Категория: ${titelSecondRef.textContent}`);

// const itemSecond = itemRef[1].querySelectorAll('li');
// console.log(`Количество элементов: ${itemSecond.length}`);


// const titelThirdRef = itemRef[2].querySelector('h2');
// console.log(`Категория: ${titelThirdRef.textContent}`);

// const itemThird = itemRef[2].querySelectorAll('li');
// console.log(`Количество элементов: ${itemThird.length}`);
