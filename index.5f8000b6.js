const e=()=>{let e=document.querySelector("#nav-toggler"),t=document.querySelector("#mobile-menu"),l=document.querySelectorAll("#mobile-menu a");function n(){t.classList.contains("block")&&e.click()}e.addEventListener("click",function(){t.classList.contains("block")?(t.classList.remove("block"),t.classList.add("hidden")):(t.classList.remove("hidden"),t.classList.add("block"))}),l.forEach(e=>e.addEventListener("click",n))},t=()=>{let e=document.querySelector("#testimonial-slider");console.dir(e);let t=document.querySelector("#testimonial_next"),l=document.querySelector("#testimonial_prev"),n=document.querySelector("#testimonial_next_small"),o=document.querySelector("#testimonial_prev_small"),i=document.getElementById("testimonial-gallery");if(e&&l&&t&&o&&n&&i){let r=e.childElementCount,d=e.childNodes[1].getBoundingClientRect().width+30,a=i.getBoundingClientRect().width,u=r*d;function s(){let t=e.style.left?parseFloat(e.style.left.replace("px","")):0,l=t,n=u-Math.abs(t)-a;u>a&&n>d?l=t-d:u>a&&(l=t-n),e.style.left=`${l}px`}function c(){let t=e.style.left?parseFloat(e.style.left.replace("px","")):0;nextLeftPosition=Math.abs(t)>d?t+d:t+Math.abs(t),e.style.left=`${nextLeftPosition}px`}e.style.width=`${u}px`,e.style.left="0px",t.addEventListener("click",s),l.addEventListener("click",c),n.addEventListener("click",s),o.addEventListener("click",c)}else console.warn("Some div with given Ids not found. So, couldnot initialize slider in testimonial section.")},l=()=>{let e=document.querySelector("#whatwedo-slider"),t=document.querySelector("#whatwedo_next"),l=document.querySelector("#whatwedo_prev"),n=document.querySelector("#whatwedo_next_small"),o=document.querySelector("#whatwedo_prev_small"),i=document.getElementById("whatwedo-gallery");if(e&&l&&t&&o&&n&&i){let r=e.childElementCount,d=e.childNodes[1].getBoundingClientRect().width+30,a=i.getBoundingClientRect().width,u=r*d;function s(){let t=e.style.left?parseFloat(e.style.left.replace("px","")):0,l=t,n=u-Math.abs(t)-a;u>a&&n>d?l=t-d:u>a&&(l=t-n),e.style.left=`${l}px`}function c(){let t=e.style.left?parseFloat(e.style.left.replace("px","")):0;nextLeftPosition=Math.abs(t)>d?t+d:t+Math.abs(t),e.style.left=`${nextLeftPosition}px`}e.style.width=`${u}px`,e.style.left="0px",t.addEventListener("click",s),l.addEventListener("click",c),n.addEventListener("click",s),o.addEventListener("click",c)}else console.warn("Some div with given Ids not found. So, couldnot initialize slider in whatwedo section.")},n=()=>{let e=document.querySelector("#ourteam-slider"),t=document.querySelector("#ourteam_next"),l=document.querySelector("#ourteam_prev"),n=document.querySelector("#ourteam_next_small"),o=document.querySelector("#ourteam_prev_small"),i=document.getElementById("ourteam-gallery");if(e&&l&&t&&o&&n&&i){let r=e.childElementCount,d=e.childNodes[1].getBoundingClientRect().width+30,a=i.getBoundingClientRect().width,u=r*d;function s(){let t=e.style.left?parseFloat(e.style.left.replace("px","")):0,l=t,n=u-Math.abs(t)-a;u>a&&n>d?l=t-d:u>a&&(l=t-n),e.style.left=`${l}px`}function c(){let t=e.style.left?parseFloat(e.style.left.replace("px","")):0;nextLeftPosition=Math.abs(t)>d?t+d:t+Math.abs(t),e.style.left=`${nextLeftPosition}px`}e.style.width=`${u}px`,e.style.left="0px",t.addEventListener("click",s),l.addEventListener("click",c),n.addEventListener("click",s),o.addEventListener("click",c)}else console.warn("Some div with given Ids not found. So, couldnot initialize slider in ourteam section.")},o=()=>{let e=document.querySelector("#hire-slider"),t=document.querySelector("#hire-slider-inner");if(e&&t){let l=Array.from(t.children);e.style.setProperty("--card-count",l.length),e.getBoundingClientRect().width>t.getBoundingClientRect().width?(e.classList.remove("gradient-hire-us"),t.classList.remove("animate-hire-us"),t.style.margin="auto",t.style.paddingLeft="40px"):(e.classList.add("gradient-hire-us"),t.classList.add("animate-hire-us"),l.forEach(e=>{let l=e.cloneNode(!0);l.setAttribute("aria-hidden",!0),t.appendChild(l)}))}else console.warn("Some div with given Ids not found. So, couldnot initialize infinite carousel in hire us section.")},i=()=>{var e=0,t=0,l=0,n=0,o=0,i=0,s=0,c=0;let r=document.querySelector(".cursorFollowerFirst"),d=document.querySelector(".cursorFollowerSecond"),a=document.querySelector(".cursorFollowerThird");console.log("hello"),document.addEventListener("mousemove",e=>{console.log("mouse"),i=e.screenX,c=e.screenY}),setInterval(function(){e+=(i-e)/60,t+=(c-t)/60,r.style.left=e+"px",r.style.top=t+"px"},20),setInterval(function(){l+=(i-l)/80,n+=(c-n)/80,d.style.left=l+"px",d.style.top=n+"px"},20),setInterval(function(){o+=(i-o)/85,s+=(c-s)/85,a.style.left=o+"px",a.style.top=s+"px"},20)};window.onload=()=>{setTimeout(()=>{e(),t(),console.log("here"),l(),n(),o(),i()},10)};
//# sourceMappingURL=index.5f8000b6.js.map
