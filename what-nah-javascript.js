// Define variables for image looping
let wrenImages = document.querySelectorAll('.wren-loop');
let adaImages = document.querySelectorAll('.ada-loop');
let markImages = document.querySelectorAll('.mark-loop');
let lewisImages = document.querySelectorAll('.lewis-loop')

let currentIndexWren = 0;
let currentIndexAda = 0;
let currentIndexMark = 0;
let currentIndexLewis = 0;

// create Image Loop Function
function loopWren() {
    // Hide all images within this class
    wrenImages.forEach(img => {
        img.classList.remove('show');
    });
    // Show the current image
    wrenImages[currentIndexWren].classList.add('show');
    // Increment index for next image
                currentIndexWren = (currentIndexWren + 1) % wrenImages.length;
    // Call loopImages function recursively after a delay
    setTimeout(loopWren, 3000);
}
// call loop images function
loopWren();

// create Image Loop Function
function loopLewis() {
    // Hide all images within this class
    lewisImages.forEach(img => {
        img.classList.remove('show');
    });
    // Show the current image
    lewisImages[currentIndexLewis].classList.add('show');
    // Increment index for next image
                currentIndexLewis = (currentIndexLewis + 1) % lewisImages.length;
    // Call loopImages function recursively after a delay
    setTimeout(loopLewis, 3750);
}
// call loop images function
loopLewis();

// create Image Loop Function
function loopAda() {
    // Hide all images within this class
    adaImages.forEach(img => {
        img.classList.remove('show');
    });
    // Show the current image
    adaImages[currentIndexAda].classList.add('show');
    // Increment index for next image
                currentIndexAda = (currentIndexAda + 1) % adaImages.length;
    // Call loopImages function recursively after a delay
    setTimeout(loopAda, 4500);
}
// call loop function
loopAda();

// create Image Loop Function
function loopMark() {
    // Hide all images within this class
    markImages.forEach(img => {
        img.classList.remove('show');
    });
    // Show the current image
    markImages[currentIndexMark].classList.add('show');
    // Increment index for next image
                currentIndexMark = (currentIndexMark + 1) % markImages.length;
    // Call loopImages function recursively after a delay
    setTimeout(loopMark, 5250);
}
// call loop function
loopMark();

//create lightbox
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

const close = document.createElement('a');
close.id = 'close';
close.innerText = "close x"

const next = document.createElement('a');
next.id = 'next';
next.innerText = 'next';

const prev = document.createElement('a');
prev.id = 'prev';
prev.innerText = 'prev';

//lightbox functionality
const images = document.querySelectorAll('.gallery-img');
images.forEach(image => {
    image.addEventListener('click', e => {
        lightbox.classList.add('active');
        const img = document.createElement('img');
        img.src = image.src;
      
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild)
        }
        lightbox.appendChild(close);
        lightbox.appendChild(prev);
        lightbox.appendChild(img);
        lightbox.appendChild(next);
    })
});
// Add functionality to close
close.addEventListener('click', e => {
    lightbox.classList.remove('active')
});
// Add functionality to next and prev buttons
let ImageIndex = 0;
next.addEventListener('click', e => {
      ImageIndex = (ImageIndex + 1) % images.length;
    const nextImage = images[ImageIndex];
  const lightboxImage = document.querySelector('#lightbox img'); 
  lightboxImage.src = nextImage.src;
})
prev.addEventListener('click', e => {
      ImageIndex = (ImageIndex - 1 + images.length) % images.length;
    const prevImage = images[ImageIndex];
  const lightboxImage = document.querySelector('#lightbox img'); 
  lightboxImage.src = prevImage.src;
})
//Keyboard functionality for Lightbox needed
