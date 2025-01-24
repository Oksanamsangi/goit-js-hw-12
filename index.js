import{a as C,i as n,S as w}from"./assets/vendor-D0cagnvz.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const f of o.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();const u=async(a,e,t)=>{try{return(await C.get("https://pixabay.com/api/",{params:{key:"47679134-c77d37d01e499358209d43473",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:t,page:e}})).data}catch(r){n.show({message:`${r}`,messageColor:"#ffffff",iconUrl:xmarkSvg,backgroundColor:"#ef4040",position:"topRight"}),console.log(r)}},L=new w(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}),g=document.querySelector(".gallery"),m=a=>{const e=a.map(t=>`
       <li class="gallery-item">
          <a class="gallery-link" href="${t.largeImageURL}">
            <img
            class="gallery-image"
            src="${t.webformatURL}"
            alt="${t.tags}"
            />
          </a>
          <div class="stat-container">
            <div>
                <span class="stat-span"><b>Likes</b></span>
                <span class="stat-span">${t.likes}</span>
            </div>
            <div>
                <span class="stat-span"><b>Views</b></span>
                <span class="stat-span">${t.views}</span>
            </div>
             <div>
                <span class="stat-span"><b>Comments</b></span>
                <span class="stat-span">${t.comments}</b></span>
            </div>
             <div>
                <span class="stat-span"><b>Downloads</b></span>
                <span class="stat-span">${t.downloads}</span>
            </div>
          </div>
        </li>
      `).join("");g.insertAdjacentHTML("beforeend",e),L.refresh()},d=document.querySelector(".search-form"),y=document.querySelector(".loader"),l=document.querySelector(".load-more-btn");let c,i=1,p=15;const h=()=>{y.style.display="block"},b=()=>{y.style.display="none"},v=(a,e)=>{a>=e&&(l.style.display="none",n.show({message:"We're sorry, but you've reached the end of search results.",messageColor:"#ffffff",iconUrl:ahtungSvg,backgroundColor:"#ffa000",position:"topRight"}))};d.addEventListener("submit",a=>{if(a.preventDefault(),l.style.display="none",g.innerHTML="",c=a.target.elements.search.value.trim().toLowerCase(),c===""){n.show({message:"Input field can not be empty. Please enter your message.",messageColor:"#ffffff",iconUrl:xmarkSvg,backgroundColor:"#ef4040",position:"topRight"});return}h(),i=1,u(c,i,p).then(e=>{if(e.hits.length===0){n.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#ffffff",iconUrl:xmarkSvg,backgroundColor:"#ef4040",position:"topRight"});return}l.style.display="block",v(i*p,e.totalHits),m(e.hits)}).catch(e=>{n.show({message:`${e}`,messageColor:"#ffffff",iconUrl:xmarkSvg,backgroundColor:"#ef4040",position:"topRight"}),console.log(e)}).finally(()=>{b()}),d.reset()});l.addEventListener("click",a=>{l.style.display="none",i+=1,h(),u(c,i,p).then(e=>{l.style.display="block",v(i*p,e.totalHits),m(e.hits);const r=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:r.height*2,behavior:"smooth"})}).catch(e=>{n.show({message:`${e}`,messageColor:"#ffffff",iconUrl:xmarkSvg,backgroundColor:"#ef4040",position:"topRight"}),console.log(e)}).finally(()=>{b()})});
//# sourceMappingURL=index.js.map
