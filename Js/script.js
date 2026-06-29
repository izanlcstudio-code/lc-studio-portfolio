const toggle =
document.querySelector(
".menu-toggle"
);

const nav =
document.querySelector(
".nav"
);



toggle.addEventListener(
"click",
()=>{

toggle.classList.toggle(
"active"
);

nav.classList.toggle(
"active"
);

});



document
.querySelectorAll(
".nav a"
)

.forEach(link=>{

link.addEventListener(
"click",
()=>{

toggle.classList.remove(
"active"
);

nav.classList.remove(
"active"
);

});

});

/* =========================
SCROLL REVEAL
========================= */

const reveal = () => {

const items =

document.querySelectorAll(

".reveal"

);

items.forEach(item=>{

const top =

item.getBoundingClientRect()

.top;

if(

top <

window.innerHeight - 120

){

item.classList.add(

"active"

);

}

});

};



window.addEventListener(

"scroll",

reveal

);



window.addEventListener(

"load",

reveal

);

/* =========================
HEADER SCROLL
========================= */

const header =

document.querySelector(

".header"

);

window.addEventListener(

"scroll",

()=>{

if(

window.scrollY > 60

){

header.classList.add(

"scrolled"

);

}

else{

header.classList.remove(

"scrolled"

);

}

});

/* =========================
SECCION ACTIVA
========================= */

const sections =

document.querySelectorAll(

"section[id]"

);

const navLinks =

document.querySelectorAll(

".nav a"

);

window.addEventListener(

"scroll",

()=>{

let current = "";

sections.forEach(section=>{

const top =

section.offsetTop - 180;

const height =

section.offsetHeight;

if(

window.scrollY >= top

){

current =

section.getAttribute(

"id"

);

}

});

navLinks.forEach(link=>{

link.classList.remove(

"active"

);

if(

link.getAttribute(

"href"

)

===

"#"+current

){

link.classList.add(

"active"

);

}

});

});