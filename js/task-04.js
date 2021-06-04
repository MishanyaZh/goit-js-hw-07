
const counterContainer = document.getElementById('counter');
console.dir(counterContainer);

const decrementButton = counterContainer.children[0];
console.log(decrementButton);

const valueCount = counterContainer.children[1];
console.dir(valueCount);


const incrementButton = counterContainer.children[2];
console.log(incrementButton);




decrementButton.addEventListener('click', event => {
    
console.log('-clik');
});


incrementButton.addEventListener('click', event => {

    valueCount.textContent += 1;
    // for (let i = 0; i <valueCount; i+1) {
    //     valueCount=[i]; 
    // }
   console.log('+clik'); 
});