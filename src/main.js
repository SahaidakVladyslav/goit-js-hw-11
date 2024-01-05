

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const formEl = document.querySelector('.js-search-form')
const inputEl = document.querySelector('[type="text"]')
const listEl = document.querySelector('.list')


function markup(obj) {
    const mamba = obj.hits.map(item => `
    <li> <img src="${item.largeImageURL}"width="360px" alt="${item.tags}"><p>likes: ${item.likes}</p></li>
    `).join("");
    listEl.style.display = 'flex'
    listEl.style.flexWrap = 'wrap'
    listEl.style.margin = '15 px'
    return listEl.innerHTML = mamba;
};

function fetchPhoto(id) {
    return fetch(`https://pixabay.com/api/?key=41648594-e525389370aefc2e125a1a54e&q=${id}&image_type=photo`)
        .then(response => response.json())
}


function submitForm() {

    fetchPhoto(inputEl.value)
        .then(response => {
            markup(response)
            console.log(response)
        })
        .catch(error => console.log(`${error} mamba`))
}


formEl.addEventListener('submit', (event) => {
    event.preventDefault()
    submitForm()
})
