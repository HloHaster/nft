let image = document.getElementById('full-image');
let gridBlock = document.querySelector(".grid");

gridBlock.style.height = image.offsetHeight + 'px';
gridBlock.style.width = image.offsetWidth + 'px';

window.addEventListener('resize', function(event) {
    gridBlock.style.height = image.offsetHeight + 'px';
    gridBlock.style.width = image.offsetWidth + 'px';
}, true);