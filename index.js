import{a as R,S as q,i}from"./assets/vendor-BNibzuFn.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function a(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(t){if(t.ep)return;t.ep=!0;const o=a(t);fetch(t.href,o)}})();const B="52724963-1b39cb743cbbccbbd6e65dea0",$="https://pixabay.com/api/";async function y(r,e){try{const a=await R.get($,{params:{key:B,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15}});if(!a.data.hits)throw new Error("Unexpected API response format");return a.data}catch(a){throw console.error("Error:",a),a}}const h=document.querySelector(".gallery"),b=document.querySelector(".button-load"),L=document.querySelector(".loader");let p;function v(r){const e=r.map(({webformatURL:a,largeImageURL:c,tags:t,likes:o,views:n,comments:A,downloads:E})=>`
                <li class="gallery-item">
                    <a class="gallery-link" href="${c}">
                        <img class="gallery-image" src="${a}" alt="${t}"/>
                    <div class="image-info">
                        <p class="image-item">
                            <span class="info-label">Likes</span>
                            <span class="info-value">${o}</span>
                        </p>
                        <p class="image-item">
                            <span class="info-label">Views</span>
                            <span class="info-value">${n}</span>
                        </p>
                        <p class="image-item">
                            <span class="info-label">Comments</span>
                            <span class="info-value">${A}</span>
                        </p>
                        <p class="image-item">
                            <span class="info-label">Downloads</span>
                            <span class="info-value">${E}</span>
                        </p>
                </div>
            </a>
        </li>
        `).join("");h.insertAdjacentHTML("beforeend",e),p?p.refresh():p=new q(".gallery a",{captionsData:"alt",captionDelay:250,close:!0})}function x(){h.innerHTML=""}function w(){L.classList.remove("hidden")}function s(){L.classList.add("hidden")}function f(){b.classList.remove("hidden")}function u(){b.classList.add("hidden")}const P=document.querySelector("form"),g=P.elements["search-text"],I=document.querySelector(".button-load");let d="",l=1,m=0;P.addEventListener("submit",M);I.addEventListener("click",O);u();async function M(r){if(r.preventDefault(),d=g.value.trim(),l=1,m=0,x(),u(),w(),d===""){i.error({title:"Error",message:"Please enter a search query.",position:"topRight"}),s();return}try{const e=await y(d,l);if(!e||!Array.isArray(e.hits)){i.error({message:"Received incorrect data while loading additional images. Please try again.",position:"topRight"}),s();return}if(m=e.totalHits,e.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),s();return}v(e.hits),s(),S()}catch(e){console.log("catch",e),i.error({message:"Try again!",position:"topRight"}),s()}finally{g.value=""}}async function O(){l+=1,w(),u();try{const r=await y(d,l);if(!r||!Array.isArray(r.hits)){i.error({message:"Received incorrect data while loading additional images. Please try again.",position:"topRight"}),s(),f();return}v(r.hits),s(),S(),C()}catch(r){console.log("catch",r),i.error({message:"An error occurred while loading more images",position:"topRight"}),s(),f()}}function S(){l*15>=m?(u(),i.info({message:"We're sorry, but you've reached the end  of  search results."})):f()}function C(){const r=h.firstElementChild;if(r){const e=r.getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}}
//# sourceMappingURL=index.js.map
