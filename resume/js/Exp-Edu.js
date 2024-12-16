// Se llama el JSON
var requestURL = './js/ExperienciaEducacion.json';
fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        console.table(jsonObject);
        myobj = jsonObject;

        for (var i = 0; i < myobj.length; i++) {

            var tipo = myobj[i].Tipo;
            if (tipo == "Experiencia") {

                var DivCont = document.createElement('div');
                var DivVacio = document.createElement('div');
                var DivCajaTexto = document.createElement('div');
                var DivCirculoExp = document.createElement('div');
                var DivInfo = document.createElement('div');
                var TituloExp = document.createElement('h5');
                var Puesto = document.createElement('p');
                var Tiempo = document.createElement('p');
                var Descripcion = document.createElement('p');

                DivCont.classList.add("cont");
                DivVacio.classList.add("vacio");
                DivCajaTexto.classList.add("caja-texto");
                DivCirculoExp.classList.add("circuloExp");
                DivInfo.classList.add("info");
                DivInfo.classList.add("TextLeft");
                TituloExp.textContent = myobj[i].Titulo;
                Puesto.classList.add("puesto");
                Puesto.textContent = myobj[i].Puesto;
                Tiempo.classList.add("tiempo");
                Tiempo.textContent = myobj[i].Tiempo;
                Descripcion.classList.add("Descripcion");
                Descripcion.textContent = myobj[i].Descripcion;

                DivCont.appendChild(DivVacio);
                DivCont.appendChild(DivCajaTexto);
                DivCajaTexto.appendChild(DivCirculoExp);
                DivCajaTexto.appendChild(DivInfo);
                DivInfo.appendChild(TituloExp);
                DivInfo.appendChild(Puesto);
                DivInfo.appendChild(Tiempo);
                DivInfo.appendChild(Descripcion);

                var contenedor = document.getElementById('cont-exp-edu');
                contenedor.appendChild(DivCont);


            } else {

                var DivContEdu = document.createElement('div');
                var DivVacioEdu = document.createElement('div');
                var DivCajaTextoEdu = document.createElement('div');
                var DivCirculoEdu = document.createElement('div');
                var DivInfoEdu = document.createElement('div');
                var TituloEdu = document.createElement('h5');
                var PuestoEdu = document.createElement('p');
                var TiempoEdu = document.createElement('p');
                var DescripcionEdu = document.createElement('p');

                DivContEdu.classList.add("cont");
                DivVacioEdu.classList.add("vacio");
                DivCajaTextoEdu.classList.add("caja-texto");
                DivCajaTextoEdu.classList.add("flex-end");
                DivCirculoEdu.classList.add("circuloEdu");
                DivInfoEdu.classList.add("info");
                DivInfoEdu.classList.add("TextRight");
                TituloEdu.textContent = myobj[i].Titulo;
                PuestoEdu.classList.add("puesto");
                PuestoEdu.textContent = myobj[i].Puesto;
                TiempoEdu.classList.add("tiempo");
                TiempoEdu.textContent = myobj[i].Tiempo;
                DescripcionEdu.classList.add("Descripcion");
                DescripcionEdu.textContent = myobj[i].Descripcion;

                DivContEdu.appendChild(DivCajaTextoEdu);
                DivContEdu.appendChild(DivVacioEdu);
                DivCajaTextoEdu.appendChild(DivInfoEdu);
                DivCajaTextoEdu.appendChild(DivCirculoEdu);
                DivInfoEdu.appendChild(TituloEdu);
                DivInfoEdu.appendChild(PuestoEdu);
                DivInfoEdu.appendChild(TiempoEdu);
                DivInfoEdu.appendChild(DescripcionEdu);

                var contenedorEdu = document.getElementById('cont-exp-edu');
                contenedorEdu.appendChild(DivContEdu);
            }
        }

    });