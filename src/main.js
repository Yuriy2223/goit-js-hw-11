const API_KEY = process.env.API_KEY;

import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';

import 'izitoast/dist/css/iziToast.min.css';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('#search-form');
const gallery = document.querySelector('#gallery');
const loader = document.querySelector('#loader');

const lightbox = new SimpleLightbox('.gallery a');

form.addEventListener('submit', event => {
  event.preventDefault();

  loader.classList.remove('hidden');
  gallery.innerHTML = '';

  const searchQuery = event.currentTarget.elements.query.value;

  fetch(
    `https://pixabay.com/api/?key=${API_KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then(data => {
      loader.classList.add('hidden');

      if (data.hits.length === 0) {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        return;
      }

      const images = data.hits.map(image => {
        return `<a href="${image.largeImageURL}">
                  <img src="${image.webformatURL}" alt="${image.tags}" data-large="${image.largeImageURL}">
                </a>`;
      });

      gallery.insertAdjacentHTML('beforeend', images.join(''));

      lightbox.refresh();
    })
    .catch(error => {
      loader.classList.add('hidden');

      iziToast.error({
        title: 'Error',
        message: `An error occurred: ${error.message}`,
      });
    });
});
