
let slider = document.querySelector('.slider');
let innerSlider = document.querySelector('.slider-inner');

let pressed = false;
let startx;
let x;
slider.addEventListener('mousedown', (e)=> {
    pressed = true;
    startx = e.offsetX - innerSlider.offsetLeft;
    slider.style.cursor = 'grabbing'

});

slider.addEventListener('mouseenter', ()=>{
    slider.style.cursor = 'grab'
});

slider.addEventListener('mouseup', ()=>{
    slider.style.cursor = 'grab'
});

window.addEventListener('mouseup', ()=>{
    pressed=false;
});
window.addEventListener('mousemove', (e)=>{
    if (!pressed) return;
    e.preventDefault();

    x = e.offsetX

    innerSlider.style.left = '${x-startx}'
});
