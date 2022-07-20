document.body.onload = addElements;

let image = document.getElementById('full-image'),
    gridBlock = document.querySelector(".grid");

gridBlock.style.height = image.offsetHeight + 'px';
gridBlock.style.width = image.offsetWidth + 'px';

window.addEventListener('resize', function (event) {
    gridBlock.style.height = image.offsetHeight + 'px';
    gridBlock.style.width = image.offsetWidth + 'px';
}, true);

function addElements() {
    for (let i = 0; i < 100; i++) {
        for (let j = 0; j < 100; j++) {
            let newDiv = document.createElement("div");
            newDiv.className = `grid__item row-${i+1}-column-${j+1}`;
            gridBlock.appendChild(newDiv);
        }
    }
}

gridBlock.addEventListener("click", function(event) {
    let gridItems = this.children;
    for (let i = 0; i < gridItems.length; i++) {
        let gridItem = gridItems[i];
        let rect = gridItem.getBoundingClientRect();
        let elementDetected = event.clientX >= rect.left
            && event.clientX <= rect.right
            && event.clientY >= rect.top
            && event.clientY <= rect.bottom;
        if (elementDetected) {
            let imageToDelete = document.querySelector('.part-of-image');
            if (imageToDelete) {
                imageToDelete.remove();
            }
            let image = document.createElement('img'),
                elementPosition = gridItem.className.split(' ')[1];
            image.className = 'part-of-image';
            image.style.position = 'absolute';
            image.style.left =  rect.x - rect.width/2 + 'px';
            image.style.top = rect.y - rect.height/2 + 'px';
            image.src = `/img/${elementPosition}.jpg`;
            document.body.appendChild(image);
            return;
        }
    }
});