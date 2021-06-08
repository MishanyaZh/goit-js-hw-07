//const inputRef = document.querySelector("#validation-input");

//inputRef.addEventListener('blur', inputBlur);

// function inputBlur(event) {
      
//     const value = event.currentTarget.value;

//     if (value.length < 6 || value.length > 6) {
//         event.currentTarget.classList.add('invalid');
//     }
//     else { event.currentTarget.classList.add('valid');
//         if (event.currentTarget.classList.contains('invalid')) {
//             event.currentTarget.classList.replace('invalid','valid');
//         }
//     }     
// }


//------ dataset -------

const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener('blur', inputBlur);

function inputBlur(event) {
      
    const value = event.currentTarget.value;

    if (value.length < inputRef.dataset.length || value.length > inputRef.dataset.length) {
        event.currentTarget.classList.add('invalid');
        if (event.currentTarget.classList.contains('valid')) {
            event.currentTarget.classList.replace('valid','invalid');
        }
    }
    else { event.currentTarget.classList.add('valid');
        if (event.currentTarget.classList.contains('invalid')) {
            event.currentTarget.classList.replace('invalid','valid');
        }
    }     
}


// //----- 3 -----

// const inputRef = document.getElementById('validation-input')

// inputRef.addEventListener('blur', inputBlur);

// function inputBlur(event) {

//     if (event.currentTarget.value.length < inputRef.dataset.length
//         || event.currentTarget.value.length > inputRef.dataset.length) {
//         inputRef.classList = 'invalid';

//     } else inputRef.classList = 'valid';
// }

