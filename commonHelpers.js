import{S as u,i as l}from"./assets/vendor-46aac873.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const d={}.API_KEY,f=document.querySelector("#search-form"),c=document.querySelector("#gallery"),a=document.querySelector("#loader"),m=new u(".gallery a");f.addEventListener("submit",s=>{s.preventDefault(),a.classList.remove("hidden"),c.innerHTML="";const o=s.currentTarget.elements.query.value;fetch(`https://pixabay.com/api/?key=${d}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`).then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()}).then(t=>{if(a.classList.add("hidden"),t.hits.length===0){l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}const n=t.hits.map(e=>`<a href="${e.largeImageURL}">
                  <img src="${e.webformatURL}" alt="${e.tags}" data-large="${e.largeImageURL}">
                </a>`);c.insertAdjacentHTML("beforeend",n.join("")),m.refresh()}).catch(t=>{a.classList.add("hidden"),l.error({title:"Error",message:`An error occurred: ${t.message}`})})});
//# sourceMappingURL=commonHelpers.js.map