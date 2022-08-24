const images = ["image1.jpg","image2.jpg","image3.jpg","image4.jpg","image5.jpg",]
const container = document.getElementById('content');
const nextbtn = document.getElementById('next');
const prebtn = document.getElementById("previous");
let currentimg = 0;
nextbtn.addEventListener('click',function(event){
    event.preventDefault();
    currentimg++;
    if (currentimg>images.length-1) {
        currentimg = 0;
    }
    swapimg();
})
prebtn.addEventListener('click',function(e){
    e.preventDefault();
    currentimg = currentimg-1;
    if (currentimg<0) {
        currentimg = images.length-1;
    }
    swapimg();
})
function swapimg() {
    const newslide = document.createElement('img');
    newslide.src = `slides/${images[currentimg]}`;
    newslide.className = 'fadeinimg';
    container.appendChild(newslide);
      if (container.children.length>2) {
        container.removeChild(container.children[0]);
    }
}