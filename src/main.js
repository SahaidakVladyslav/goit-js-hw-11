import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// import axios from "axios"
const formEl = document.querySelector('.js-search-form')
const inputEl = document.querySelector('input')
const galleryEl = document.querySelector('.gallery')
const loaderEl = document.querySelector('.loader')

// console.log(axios)
const gallery = new SimpleLightbox('.gallery a', {
    captions: true,
    captionDelay: 250,
    fadeSpeed: 250,
    captionSelector: "img",
    captionsData: 'alt',
    captionPosition: 'bottom',
});

async function promesUrl() {







    const urlFromPixaby = new URLSearchParams({
        key: '41648594-e525389370aefc2e125a1a54e',
        q: `${inputEl.value}`,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true
    })

    try {
        const response = await fetch(`https://pixabay.com/api/?${urlFromPixaby}`)
        const parsJson = await response.json()

        return parsJson
    } catch (error) {
        throw new Error(response.statusText);
    }
}

async function response() {
    try {
        markup(await promesUrl())
        gallery.refresh();
        loaderSwitch()
    } catch (error) {
        console.log(new Error(error))
    }

}

function markup({ hits }) {

    const typset = hits.map(item => `
    <li class="gallery__item">
    <a href="${item.largeImageURL}">
    <img class="gallery--img" src="${item.webformatURL}" alt="${item.tags}" title="${item.tags}"/>
    </a>
<ul class="gallery__list--characters">
  <p>likes: ${item.likes}</p>
  <p>views: ${item.views}</p>
  <p>comments: ${item.comments}</p>
  <p>downloads: ${item.downloads}</p>
</ul>
    </li>`).join('')

    return galleryEl.innerHTML = typset
}

const loaderSwitch = () => {

    loaderEl.classList.toggle('switcher')

}

const izitoast = async () => {

    try {
        const respons = await promesUrl()
        if (respons.hits.length === 0) {

            iziToast.error({
                title: 'Error',
                message: 'Sorry, there are no images matching your search query. Please try again!',
            });

        }
    } catch (error) {
        console.log(error)
    }

}


loaderSwitch();



formEl.addEventListener('submit', (event) => {
    event.preventDefault()
    loaderSwitch()
    response()
    izitoast()


    formEl.reset()
})


console.log('mamba')