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
console.log(galleryRef);

// const elements = images.map(image => {
//   const imageEl = document.createElement('img');
//   imageEl.src = image.url;
//   imageEl.alt = image.alt;
//   imageEl.width = '320';
  
//   const itemLiEl = document.createElement('li');
//   // console.log(itemLiEl);

//   itemLiEl.appendChild(imageEl)
//   console.log(itemLiEl);
 
//    galleryRef.appendChild(itemLiEl);
  
//   return imageEl;
// });


