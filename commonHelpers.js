import{S as u,i as c}from"./assets/vendor-46aac873.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const d="41830108-cae6afe398dec34048fd09339",f=document.querySelector("#search-form"),l=document.querySelector("#gallery"),i=document.querySelector("#loader"),m=new u(".gallery a");f.addEventListener("submit",a=>{a.preventDefault(),i.classList.remove("hidden"),l.innerHTML="";const n=a.currentTarget.elements.query.value;fetch(`https://pixabay.com/api/?key=${d}&q=${n}&image_type=photo&orientation=horizontal&safesearch=true`).then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()}).then(t=>{if(i.classList.add("hidden"),t.hits.length===0){c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}const s=t.hits.map(e=>{const r=document.createElement("img");r.src=e.webformatURL,r.alt=e.tags,r.dataset.large=e.largeImageURL;const o=document.createElement("a");return o.href=e.largeImageURL,o.appendChild(r),o});l.append(...s),m.refresh()}).catch(t=>{i.classList.add("hidden"),c.error({title:"Error",message:`An error occurred: ${t.message}`})})});
//# sourceMappingURL=commonHelpers.js.map