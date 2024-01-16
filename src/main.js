const API_KEY = '41830108-cae6afe398dec34048fd09339';

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
        const img = document.createElement('img');
        img.src = image.webformatURL;
        img.alt = image.tags;
        img.dataset.large = image.largeImageURL;

        const link = document.createElement('a');
        link.href = image.largeImageURL;
        link.appendChild(img);

        return link;
      });

      gallery.append(...images);

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
