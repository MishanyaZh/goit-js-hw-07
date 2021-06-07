const inputRef = document.querySelector("#validation-input");
// console.dir(inputRef);

// inputRef.addEventListener('focus', inputFocus);
// function inputFocus(event) {
//     console.log(`focus+`);
// }

inputRef.addEventListener('blur', inputBlur);

function inputBlur(event) {

    // console.log(`focus-`);
    // console.log(event.currentTarget.value);
     
    
    const value = event.currentTarget.value;

    if (value.length < 6 || value.length > 6) {
        event.currentTarget.classList.add('invalid');
    }
    else { event.currentTarget.classList.add('valid');
        if (event.currentTarget.classList.contains('invalid')) {
            event.currentTarget.classList.replace('invalid','valid');
        }
        
       // event.currentTarget.classList.toggle('valid');
        //console.log('not good');
    }
        
}



