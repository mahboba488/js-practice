"use strict"
let canvas,width, height, ctx;
let fireworks =[];
let particles = [];

function setup(){
    canvas = document.getElementById('canvas');
    setSize(canvas);
    ctx = canvas.getContext("2d");
    ctx.fillStyle ="#000000";
    ctx.fillRect(0,0,width,height);
    fireworks.push(new Firework(Math.random()*(width-200)+100));
    window.addEventListener("resize",windowResized);
    document.activeElement("click",onClick);
}

setTimeout(setup,1);
