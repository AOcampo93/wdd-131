const gallery = document.getElementById('gallery');

for (let i = 0; i < 9; i++) {
  const figure = document.createElement('figure');
  const img = document.createElement('img');
  img.src = './images/norris-full.jpeg';
  img.alt = 'picture';
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
