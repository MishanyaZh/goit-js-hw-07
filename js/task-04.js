
const counterContainer = document.getElementById('counter');
//console.log(counterContainer);

const decrementButton = counterContainer.children[0];
console.log(decrementButton);

const valueTextContent = counterContainer.children[1];
console.log(valueTextContent);

const incrementButton = counterContainer.children[2];
console.log(incrementButton);


let counterValue = 0;

decrementButton.addEventListener('click', event => {
    counterValue -= 1;
    valueTextContent.textContent = counterValue;
    console.log('-clik');
});


incrementButton.addEventListener('click', event => {
    counterValue += 1;
    valueTextContent.textContent = counterValue;
    //console.log(counterValue);
    console.log('+clik'); 
});
