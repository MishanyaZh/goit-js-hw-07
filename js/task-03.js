const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const galleryRef = document.querySelector('#gallery');
// console.log(galleryRef);

//(тут вы добавляете по одному ли, а ваша задача - сгенерировать полностьюж всю разметку и добавить ее за одну операцию вставки)

let arrEllements = [];
//forEach
images.forEach(image => {
  //old
  // galleryRef.insertAdjacentHTML('afterbegin', `<li><img src= ${image.url} alt= '${image.alt}' width= 360, height =240></li>`
  // );

  //update
  arrEllements.push(`<li><img src= ${image.url} alt= '${image.alt}' width= 360, height =240></li>`)

});

galleryRef.insertAdjacentHTML('beforeend', [...arrEllements].join(''));

console.log(galleryRef);







