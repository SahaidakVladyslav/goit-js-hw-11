import{S as p,i as f}from"./assets/vendor-46aac873.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const c=document.querySelector(".js-search-form"),m=document.querySelector("input"),y=document.querySelector(".gallery"),d=document.querySelector(".loader"),g=new p(".gallery a",{captions:!0,captionDelay:250,fadeSpeed:250,captionSelector:"img",captionsData:"alt",captionPosition:"bottom"});async function i(){const r=new URLSearchParams({key:"41648594-e525389370aefc2e125a1a54e",q:`${m.value}`,image_type:"photo",orientation:"horizontal",safesearch:!0});try{return await(await fetch(`https://pixabay.com/api/?${r}`)).json()}catch{throw new Error(u.statusText)}}async function u(){try{h(await i()),g.refresh(),a()}catch(r){console.log(new Error(r))}}function h({hits:r}){const s=r.map(t=>`
    <li class="gallery__item">
    <a href="${t.largeImageURL}">
    <img class="gallery--img" src="${t.webformatURL}" alt="${t.tags}" title="${t.tags}"/>
    </a>
<ul class="gallery__list--characters">
  <p>likes: ${t.likes}</p>
  <p>views: ${t.views}</p>
  <p>comments: ${t.comments}</p>
  <p>downloads: ${t.downloads}</p>
</ul>
    </li>`).join("");return y.innerHTML=s}const a=()=>{d.classList.toggle("switcher")},w=async()=>{try{(await i()).hits.length===0&&f.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}catch(r){console.log(r)}};a();c.addEventListener("submit",r=>{r.preventDefault(),a(),u(),w(),c.reset()});console.log("mamba");
//# sourceMappingURL=commonHelpers.js.map
