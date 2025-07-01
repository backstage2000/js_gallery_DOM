'use strict';

const largeImg = document.getElementById('largeImg');
const thumbs = document.getElementById('thumbs');

thumbs.addEventListener('click', (event) => {
  event.preventDefault();

  const link = event.target.closest('a.list-item__link');

  if (!link) {
    return;
  }

  largeImg.src = link.href;
  largeImg.alt = link.title || 'Large image';
});
