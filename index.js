import{a as C,i as n,S as x}from"./assets/vendor-D0cagnvz.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const f of o.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const u=async(a,e,s)=>{try{return(await C.get("https://pixabay.com/api/",{params:{key:"47679134-c77d37d01e499358209d43473",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:s,page:e}})).data}catch(r){n.show({message:`${r}`,messageColor:"#ffffff",iconUrl:xmarkSvg,backgroundColor:"#ef4040",position:"topRight"}),console.log(r)}},L=new x(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}),h=document.querySelector(".gallery"),m=a=>{const e=a.map(s=>`
       <li class="gallery-item">
          <a class="gallery-link" href="${s.largeImageURL}">
            <img
            class="gallery-image"
            src="${s.webformatURL}"
            alt="${s.tags}"
            />
          </a>
          <div class="stat-container">
            <div>
                <span class="stat-span"><b>Likes</b></span>
                <span class="stat-span">${s.likes}</span>
            </div>
            <div>
                <span class="stat-span"><b>Views</b></span>
                <span class="stat-span">${s.views}</span>
            </div>
             <div>
                <span class="stat-span"><b>Comments</b></span>
                <span class="stat-span">${s.comments}</b></span>
            </div>
             <div>
                <span class="stat-span"><b>Downloads</b></span>
                <span class="stat-span">${s.downloads}</span>
            </div>
          </div>
        </li>
      `).join("");h.insertAdjacentHTML("beforeend",e),L.refresh()},c="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2016%2016'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3crect%20width='16'%20height='16'%20id='icon-bound'%20fill='none'%20/%3e%3cpolygon%20points='14.707,2.707%2013.293,1.293%208,6.586%202.707,1.293%201.293,2.707%206.586,8%201.293,13.293%202.707,14.707%208,9.414%2013.293,14.707%2014.707,13.293%209.414,8%20'/%3e%3c/svg%3e",S="data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%2020010904//EN'%20'http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd'%3e%3csvg%20version='1.0'%20xmlns='http://www.w3.org/2000/svg'%20width='256.000000pt'%20height='225.000000pt'%20viewBox='0%200%20256.000000%20225.000000'%20preserveAspectRatio='xMidYMid%20meet'%3e%3cg%20transform='translate(0.000000,225.000000)%20scale(0.100000,-0.100000)'%20fill='%23000000'%20stroke='none'%3e%3cpath%20d='M1217%202188%20c-12%20-13%20-281%20-471%20-597%20-1018%20-627%20-1086%20-604%20-1041%20-547%20-1098%20l27%20-27%201180%200%201180%200%2027%2027%20c58%2058%2082%2010%20-546%201098%20-315%20547%20-585%201005%20-598%201018%20-17%2015%20-36%2022%20-64%2022%20-28%200%20-46%20-7%20-62%20-22z%20m514%20-1131%20l445%20-772%20-448%20-3%20c-246%20-1%20-650%20-1%20-896%200%20l-448%203%20446%20772%20c245%20425%20447%20773%20450%20773%203%200%20205%20-348%20451%20-773z'/%3e%3cpath%20d='M1234%201486%20c-56%20-25%20-74%20-59%20-74%20-145%200%20-109%2030%20-509%2041%20-554%2013%20-48%2041%20-77%2077%20-77%2043%200%2069%2025%2081%2077%2013%2059%2041%20429%2041%20545%200%2097%20-16%20129%20-76%20154%20-41%2017%20-50%2017%20-90%200z'/%3e%3cpath%20d='M1234%20610%20c-11%20-4%20-33%20-22%20-47%20-40%20-49%20-58%20-32%20-152%2034%20-186%2083%20-42%20180%2014%20181%20106%201%2089%20-87%20153%20-168%20120z'/%3e%3c/g%3e%3c/svg%3e",g=document.querySelector(".search-form"),y=document.querySelector(".loader"),l=document.querySelector(".load-more-btn");let p,i=1,d=15;const w=()=>{y.style.display="block"},v=()=>{y.style.display="none"},b=(a,e)=>{a>=e&&(l.style.display="none",n.show({message:"We're sorry, but you've reached the end of search results.",messageColor:"#ffffff",iconUrl:S,backgroundColor:"#ffa000",position:"topRight"}))};g.addEventListener("submit",a=>{if(a.preventDefault(),l.style.display="none",h.innerHTML="",p=a.target.elements.search.value.trim().toLowerCase(),p===""){n.show({message:"Input field can not be empty. Please enter your message.",messageColor:"#ffffff",iconUrl:c,backgroundColor:"#ef4040",position:"topRight"});return}w(),i=1,u(p,i,d).then(e=>{if(e.hits.length===0){n.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#ffffff",iconUrl:c,backgroundColor:"#ef4040",position:"topRight"});return}l.style.display="block",b(i*d,e.totalHits),m(e.hits)}).catch(e=>{n.show({message:`${e}`,messageColor:"#ffffff",iconUrl:c,backgroundColor:"#ef4040",position:"topRight"}),console.log(e)}).finally(()=>{v()}),g.reset()});l.addEventListener("click",a=>{l.style.display="none",i+=1,w(),u(p,i,d).then(e=>{l.style.display="block",b(i*d,e.totalHits),m(e.hits);const r=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:r.height*2,behavior:"smooth"})}).catch(e=>{n.show({message:`${e}`,messageColor:"#ffffff",iconUrl:c,backgroundColor:"#ef4040",position:"topRight"}),console.log(e)}).finally(()=>{v()})});
//# sourceMappingURL=index.js.map
