/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

var menu = document.querySelector('#menu');
var nav = document.querySelector('nav');
var width = window.matchMedia("(max-width: 1030px)");

function show(){
    if(width.matches) {
        nav.classList.toggle('active');    
    } 
}

if(!width.matches){
    nav.classList.add('active');
}

menu.addEventListener('click', show);
