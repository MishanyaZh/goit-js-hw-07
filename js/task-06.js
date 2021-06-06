const inputRef = document.querySelector("#validation-input");
// console.dir(inputRef);

// inputRef.addEventListener('focus', inputFocus);
// function inputFocus(event) {
//     console.log(`focus+`);
// }

inputRef.addEventListener('blur', inputBlur);

function inputBlur(event) {

    console.log(`focus-`);
    console.log(event.currentTarget.value);
     
    
    const value = event.currentTarget.value;

    if (value.length === 6) {
        console.log('good');
        event.currentTarget.classList.add('valid');
    } else {
        event.currentTarget.classList.add('invalid');
        console.log('not good');
    }
}



