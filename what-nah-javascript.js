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