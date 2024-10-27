import{i as u,S as d}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const p=document.querySelector(".search_bar"),f=document.querySelector(".button"),l=document.querySelector(".loader");f.addEventListener("click",m);const y="https://pixabay.com/api/?",n=new URLSearchParams({key:"46749030-b6cef6a6b69e043ecf4444c1b",image_type:"photo",orientation:"horizontal",per_page:50}),g="Sorry, there are no images matching your search query. Please try again!";function m(){let s=p.value.trim();s&&(n.set("q",s),l.style.display="block",fetch(`${y}${n}`).then(t=>(t.ok||c(),t.json())).then(t=>{if(t.total){const a=new CustomEvent("imagesFetched",{detail:t.hits});document.dispatchEvent(a),l.style.display="none"}else c(),l.style.display="none"}).catch(t=>console.log(t)))}function c(){u.error({message:g,position:"topRight",color:"red",theme:"dark"})}const h=document.querySelector(".gallery");function b(s){let t="";s.forEach(o=>{t+=`
            <li class="gallery_item">
                <a class="gallery_link" href="${o.largeImageURL}" title="${o.tags}">
                    <img
                        class="gallery-image"
                        src="${o.webformatURL}"
                        alt="${o.tags}"
                    />
                </a>
                <ul class="gallery_info">
                    <li><span class="bold_text">Likes</span><p class="text">${o.likes}</p></li>
                    <li><span class="bold_text">Views</span><p class="text">${o.views}</p></li>
                    <li><span class="bold_text">Comments</span><p class="text">${o.comments}</p></li>
                    <li><span class="bold_text">Downloads</span><p class="text">${o.downloads}</p></li>
                </ul>
            </li>
        `}),h.innerHTML=t,new d(".gallery a",{nav:!0,overlay:!0,captions:!0,captionSelector:"self",captionType:"attr",captionData:"title",captionPosition:"bottom",captionDelay:250}).refresh()}document.addEventListener("imagesFetched",s=>{b(s.detail)});
//# sourceMappingURL=index.js.map
