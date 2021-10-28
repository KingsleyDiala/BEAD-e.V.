// Scroll Animation How We Help Container
window.addEventListener('scroll', () => {
  let  content = document.getElementById('how-we-help').querySelector('.container');
  let contentPosition = content.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;
  if (contentPosition < screenPosition) {
    content.classList.add('how-we-help-wipe-in')
  } else {
    content.classList.remove('how-we-help-wipe-in')
  }
});





// Scroll Animation About us

// Left container
window.addEventListener('scroll', () => {
  let  content = document.querySelector('.zoom-in');
  let contentPosition = content.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;
  if (contentPosition < screenPosition) {
    content.classList.add('active')
  } else {
    content.classList.remove('active')
  }
})

// Right container
window.addEventListener('scroll', () => {
  let  content = document.querySelector('.right-container');
  let contentPosition = content.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;
  if (contentPosition < screenPosition) {
    content.classList.add('right-active')
  } else {
    content.classList.remove('right-active')
  }
});



// Scroll Animation Our Captain

// Image Left
window.addEventListener('scroll', () => {
  let  content = document.getElementById('our-captain').querySelector('.content-left');
  let contentPosition = content.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;
  if (contentPosition < screenPosition) {
    content.classList.add('left-transition')
  } else {
    content.classList.remove('left-transition')
  }
});

// Contents Right
window.addEventListener('scroll', () => {
  let  content = document.getElementById('our-captain').querySelector('.content-right');
  let contentPosition = content.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;
  if (contentPosition < screenPosition) {
    content.classList.add('right-transition')
  } else {
    content.classList.remove('right-transition')
  }
});


// Animation Contact Us
window.addEventListener('scroll', () => {
  let  content = document.getElementById('contact-us').querySelector('.container');
  let contentPosition = content.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;
  if (contentPosition < screenPosition) {
    content.classList.add('transition')
  } else {
    content.classList.remove('transition')
  }
});