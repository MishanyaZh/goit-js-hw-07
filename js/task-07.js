const controlRef = document.getElementById('font-size-control');
console.log(controlRef);
const textAbraRef = document.getElementById('text')
console.log(textAbraRef);
// textAbraRef.style.fontSize = '48px';
// console.log(textAbraRef.style.fontSize);
// const fontSizeVal = textAbraRef.style.fontSize;



controlRef.addEventListener('input', controlFefchenge);

function controlFefchenge (event) {
    
    // console.log(event.currentTarget.value);
    const controlVal = event.currentTarget.value;
    const fontSizeVal = textAbraRef.style.fontSize;
    
    textAbraRef.style.fontSize = `${controlVal}px`;
    // console.log(textAbraRef.style.fontSize);
   
    console.log(fontSizeVal);
};