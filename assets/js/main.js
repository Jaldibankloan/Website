!function(){"use strict";!function(){const t=(t,e=!1)=>(t=t.trim(),e?[...document.querySelectorAll(t)]:document.querySelector(t)),e=(t,e)=>{t.addEventListener("scroll",e)};let o=t("#navbar .scrollto",!0);const s=()=>{let e=window.scrollY+200;o.forEach(o=>{if(!o.hash)return;let s=t(o.hash);s&&(e>=s.offsetTop&&e<=s.offsetTop+s.offsetHeight?o.classList.add("active"):o.classList.remove("active"))})};window.addEventListener("load",s),e(document,s);const i=e=>{let o=t("#header"),s=o.offsetHeight;o.classList.contains("header-scrolled")||(s-=16);let i=t(e).offsetTop;window.scrollTo({top:i-s,behavior:"smooth"})};let l=t("#header");if(l){let t=l.offsetTop,o=l.nextElementSibling;const s=()=>{t-window.scrollY<=0?(l.classList.add("fixed-top"),o.classList.add("scrolled-offset")):(l.classList.remove("fixed-top"),o.classList.remove("scrolled-offset"))};window.addEventListener("load",s),e(document,s)}let a=t(".back-to-top");if(a){const t=()=>{window.scrollY>100?a.classList.add("active"):a.classList.remove("active")};window.addEventListener("load",t),e(document,t)}((e,o,s,i=!1)=>{let l=t(o,i);l&&(i?l.forEach(t=>t.addEventListener(e,s)):l.addEventListener(e,s))})("click",".scrollto",function(e){if(t(this.hash)){e.preventDefault();let o=t("#navbar");if(o.classList.contains("navbar-mobile")){o.classList.remove("navbar-mobile");let e=t(".mobile-nav-toggle");e.classList.toggle("bi-list"),e.classList.toggle("bi-x")}i(this.hash)}},!0),window.addEventListener("load",()=>{window.location.hash&&t(window.location.hash)&&i(window.location.hash)})}()}();