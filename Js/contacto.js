window.addEventListener(

"scroll",

()=>{

const h=

document.documentElement;

const scrolled=

(

h.scrollTop

/

(

h.scrollHeight-

h.clientHeight

)

)

*100;

document.querySelector(

".progress-bar"

)

.style.width=

scrolled+"%";

});

const glow=

document.querySelector(

".cursor-glow"

);

document.addEventListener(

"mousemove",

e=>{

glow.style.left=

e.clientX+"px";

glow.style.top=

e.clientY+"px";

});

const arrow=

document.querySelector(

".scroll-down"

);

window.addEventListener(

"scroll",

()=>{

arrow.style.opacity=

window.scrollY>100

?0

:1;

});

/* ===================
FORM
=================== */

const form=

document.querySelector(

"form"

);

const success=

document.querySelector(

".success-message"

);

form.addEventListener(

"submit",

e=>{

e.preventDefault();

success.classList.add(

"active"

);

form.reset();

});