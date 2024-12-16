import portafolio from './portafolio.mjs';

document.addEventListener("DOMContentLoaded", () => {
    const ulList = document.getElementById('listPortafolio');

    // Generar lista de proyectos
    portafolio.forEach((project, index) => {
        const lista = document.createElement('li');
        const ancla = document.createElement('a');

        ancla.textContent = project.list;
        ancla.setAttribute('onclick', `showProject(${index})`);

        lista.appendChild(ancla);
        ulList.appendChild(lista);
    });
});

// Mostrar detalles del proyecto seleccionado
window.showProject = (projectIndex) => {
    const project = portafolio[projectIndex];

    document.getElementById('title-project').innerHTML = project.Title;
    document.getElementById('description-project').innerHTML = project.Description;
    document.getElementById('img-portfolio').src = project.imgPrincipalURL;

    const toolList = document.getElementById('toolList');
    const contBtn = document.getElementById('cont-btn');

    // Limpiar elementos previos
    toolList.innerHTML = '';
    contBtn.innerHTML = '';

    // Añadir herramientas
    project.Tools.forEach(tool => {
        const imgTools = document.createElement('img');
        imgTools.setAttribute('class', 'tool');
        imgTools.src = tool.imgUrl;
        toolList.appendChild(imgTools);
    });

    // Botón para el enlace del sitio web
    const btnLink = document.createElement('button');
    btnLink.textContent = "See the site";
    btnLink.setAttribute('onclick', `window.open('${project.link}', '_blank')`);
    contBtn.appendChild(btnLink);

    // Botón para el video (si existe)
    if (project.Video && project.Video.trim() !== "") {
        const videoBtn = document.createElement('button');
        videoBtn.textContent = "See Video";
        contBtn.appendChild(videoBtn);

        videoBtn.addEventListener('click', () => {
            document.getElementById('videoIframe').src = project.Video;
            document.getElementById('videoModal').style.display = 'block';
        });
    }

    // Eventos para cerrar el modal
    const closeModal = document.getElementById('closeModal');
    closeModal.addEventListener('click', () => {
        document.getElementById('videoModal').style.display = 'none';
        document.getElementById('videoIframe').src = ''; // Detener el video
    });

    window.onclick = (event) => {
        const videoModal = document.getElementById('videoModal');
        if (event.target == videoModal) {
            videoModal.style.display = 'none';
            document.getElementById('videoIframe').src = ''; // Detener el video
        }
    };
};
