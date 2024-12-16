// Se llama el JSON
var requestURL = './js/Habilidades.json';
fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        console.table(jsonObject);
        myobj = jsonObject;
        //Le asigno una variable a una posición del JSON donde quiero que comience
        var objJSON = myobj.Habilidades;


        // Genero un loop que creara cada elemento en HTML
        //Este FOR crea las categorias y el nombre de cada categoria
        for (var i = 0; i < objJSON.length; i++) {

            //Asigno una variable a cada elemento creado
            var DivCategoria = document.createElement('div');
            var H3 = document.createElement('h3');

            //A cada variable le agrego una clase o llamo el texto del JSON
            DivCategoria.classList.add("Categoria");
            DivCategoria.classList.add("col-md-12");
            DivCategoria.classList.add("col-lg-6");
            H3.textContent = objJSON[i].Categoria;

            // AppendChild es para decir que dentro de DivCategoria esta H3
            // Ordeno los elementos HTML'S diciendo quien va dentro de quien
            DivCategoria.appendChild(H3);

            //Asigno otra variable a una nueva posición en el JSON donde quiero que comience
            var skills = objJSON[i].Skills;
            // Apartir de aqui ejecuto otro loop dentro del primero para recorrer otra sección del JSON
            // Este FOR crea cada habilidad dentro de la respectiva categoria
            for (var j = 0; j < skills.length; j++) {

                //Asigno una variable a cada elemento creado
                var DivContPrincipal = document.createElement('div');
                var DivContHabilidad = document.createElement('div');
                var DivBarraPorcentaje = document.createElement('div');
                var NombreHabilidad = document.createElement('p');
                var TextPorcent = document.createElement('p');

                //A cada variable le agrego una clase o llamo el texto del JSON 
                DivContPrincipal.classList.add("cont-PorcentajePrincipal");
                DivContHabilidad.classList.add("ContenedorHabilidad");
                DivBarraPorcentaje.classList.add("BarraPocentaje");
                //En este caso modifico los estilos usando un valor del JSON y sobreescribiendo el CSS
                DivBarraPorcentaje.style.width = skills[j].Porcentaje + "%";

                //A cada variable le llamo texto del JSON y al final asigno una clase faltante
                NombreHabilidad.textContent = skills[j].Nombre;
                TextPorcent.textContent = skills[j].Porcentaje + "%";
                TextPorcent.classList.add("TextPorcent");

                // Ordeno los elementos HTML'S diciendo quien va dentro de quien
                DivCategoria.appendChild(DivContPrincipal);
                DivContPrincipal.appendChild(DivContHabilidad);
                DivContPrincipal.appendChild(TextPorcent);
                DivContHabilidad.appendChild(DivBarraPorcentaje);
                DivBarraPorcentaje.appendChild(NombreHabilidad);
            }

            //Termino diciendo que todos esos nuevos elementos deberan ir dentro de una sección en el HTML
            var Contenedor = document.getElementById('ContenedorHabilidades');
            Contenedor.appendChild(DivCategoria);
        }


    });