//Transitions between pages
window.onload = () => {
    const anchors = document.querySelectorAll('a');
    const transition_el = document.querySelector('.transition');
    const loading = document.querySelector('.dots');
  
    setTimeout(() => {
      transition_el.classList.remove('is-active');
      loading.classList.remove('is-active');
    }, 250);
  
    for (let i = 0; i < anchors.length; i++) {
      const anchor = anchors[i];
  
      anchor.addEventListener('click', e => {
        e.preventDefault();
        let main = document.querySelector('main');
        console.log(main);
        main.classList.add('fadeout-side');
        let target = e.target.href;
  
        transition_el.classList.add('is-active');
        loading.classList.add('is-active');
  
        setTimeout(() => {
          window.location.href = target;
        }, 1000);
      })
    }
}