// Se llama el JSON
var requestURL = './js/portafolio.json';
fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        console.table(jsonObject);
        myobj = jsonObject;
        //Le asigno una variable a una posición del JSON donde quiero que comience
        var objJSON = myobj.Portafolio;

        //Este es el ID de contenedor que almacena los nuevos elementos que se escribirán con JS
        let ulList = document.getElementById('listPortafolio');

        //Se generá un FOR para hacer una lista de todos los proyectos
        for (var i = 0; i < objJSON.length; i++) {

            // Se crean los elemento nuevos
            let lista = document.createElement('li');
            let ancla = document.createElement('a');

            // Al elemento ancla se le escribe la info de JSON
            ancla.textContent = objJSON[i].list;
            // Al elemento ANCLA se le genera un Onclick llamando una función
            ancla.setAttribute('onclick', 'showProject(' + i + ')');

            //Se organizan los elementos JS
            lista.appendChild(ancla);
            ulList.appendChild(lista);
        }
    });


function showProject(project) {
    var requestURL = './js/portafolio.json';
    fetch(requestURL)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonObject) {
            console.table(jsonObject);
            myobj = jsonObject;

            // Se vuelve a llamar el objeto JSON
            var objJSON = myobj.Portafolio;

            // Se escribe en los campos correspondientes la información del proyecto
            document.getElementById('title-project').innerHTML = objJSON[project].Title;
            document.getElementById('description-project').innerHTML = objJSON[project].Description;
            document.getElementById('img-portfolio').src = objJSON[project].imgPrincipalURL;

            // ID del contenedor de herramientas
            let toolList = document.getElementById('toolList');
            let tools = objJSON[project].Tools;

            // Elimina elementos existentes para evitar duplicados
            $("img").remove(".tool");
            $("button").remove("#btn-link");
            $("button").remove("#btn-video");

            // Añade las imágenes de herramientas
            for (var j = 0; j < tools.length; j++) {
                let imgTools = document.createElement('img');
                imgTools.setAttribute('class', 'tool');
                imgTools.src = tools[j].imgUrl;
                toolList.appendChild(imgTools);
            }

            // Crea el botón para el enlace del sitio web
            let contBtn = document.getElementById('cont-btn');
            let btn = document.createElement('button');
            btn.textContent = "See the site";
            btn.setAttribute('onclick', 'window.open("' + objJSON[project].link + '", "_blank")');
            btn.setAttribute('id', 'btn-link');
            contBtn.appendChild(btn);

            // Si hay un campo "Video" válido, crea el botón para abrir el modal
            if (objJSON[project].Video && objJSON[project].Video.trim() !== "") {
                let videoBtn = document.createElement('button');
                videoBtn.textContent = "See Video";
                videoBtn.setAttribute('id', 'btn-video');
                contBtn.appendChild(videoBtn);

                videoBtn.addEventListener('click', function() {
                    // Muestra el modal y establece la URL del video
                    document.getElementById('videoIframe').src = objJSON[project].Video;
                    document.getElementById('videoModal').style.display = 'block';
                });
            }

            // Cierra el modal cuando se hace clic en la "X"
            document.getElementById('closeModal').addEventListener('click', function() {
                document.getElementById('videoModal').style.display = 'none';
                document.getElementById('videoIframe').src = ''; // Limpia la URL del iframe para detener el video
            });

            // Cierra el modal cuando se hace clic fuera del contenido
            window.onclick = function(event) {
                if (event.target == document.getElementById('videoModal')) {
                    document.getElementById('videoModal').style.display = 'none';
                    document.getElementById('videoIframe').src = ''; // Limpia la URL del iframe para detener el video
                }
            };
        });
}