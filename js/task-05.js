// const inputRef = document.querySelector('#name-input');
// console.dir(inputRef);

// const outputRef = document.getElementById('name-output');
// console.log(outputRef.textContent);



const refs = {
    inputRef: document.querySelector('#name-input'),
    outputRef: document.getElementById('name-output'),
};

refs.inputRef.addEventListener('input', onInputChange);

function onInputChange(event) {
    console.log(event.currentTarget.value);
    refs.outputRef.textContent = event.currentTarget.value;
}