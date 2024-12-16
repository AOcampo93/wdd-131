function portafolio(x) {
    var page;
    switch (x) {
        case 1:
            page = document.getElementById('FrontEnd').style.display = "block";
            location.href = 'portafolio.html';
            break;
        case 2:
            page = document.getElementById('DWeb').style.display = "block";
            location.href = 'portafolio.html';
            break;
        case 3:
            location.href = 'portafolio.html';
            document.getElementById('DGrafico').style.display = "block";
            break;
        default:
            page = document.getElementById('FrontEnd').style.display = "block";
            location.href = 'portafolio.html';
    }
}