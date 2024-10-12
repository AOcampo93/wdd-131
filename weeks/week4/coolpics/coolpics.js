const gallery = document.getElementById('gallery');

for (let i = 1; i <= 9; i++) { 
    const figure = document.createElement('figure');
    figure.setAttribute('onclick', `showWindows(${i})`);
    
    const img = document.createElement('img');
    img.src = './images/norris-full.jpeg';
    img.alt = 'picture';
    img.id = "img-" + i;
    
    figure.appendChild(img);
    gallery.appendChild(figure);
  }

function showMenu() {
    const btnMenu = document.getElementById('mobile-menu');
    const menu = document.getElementById('menu');

    if(menu.style.display == "block"){
        menu.style.display = "none";
    } else{
        menu.style.display = "block";
    }
}

function showWindows(id) {
    const modal = document.getElementById('Modal-windows');
    const img = document.getElementById('img-' + id).src;
    const fullImg = document.getElementById('full-image');

    modal.style.display = "flex";
    fullImg.src = img;
}

function closeWindow() {
    const modal = document.getElementById('Modal-windows');
    modal.style.display = "none";
}
