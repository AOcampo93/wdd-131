import experienciaEducacion from './ExperienciaEducacion.mjs';

document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById('cont-exp-edu');

    experienciaEducacion.forEach(item => {
        if (item.Tipo === "Experiencia") {
            // Creación de elementos para experiencia
            const DivCont = document.createElement('div');
            const DivVacio = document.createElement('div');
            const DivCajaTexto = document.createElement('div');
            const DivCirculoExp = document.createElement('div');
            const DivInfo = document.createElement('div');
            const TituloExp = document.createElement('h5');
            const Puesto = document.createElement('p');
            const Tiempo = document.createElement('p');
            const Descripcion = document.createElement('p');

            DivCont.classList.add("cont");
            DivVacio.classList.add("vacio");
            DivCajaTexto.classList.add("caja-texto");
            DivCirculoExp.classList.add("circuloExp");
            DivInfo.classList.add("info", "TextLeft");
            TituloExp.textContent = item.Titulo;
            Puesto.classList.add("puesto");
            Puesto.textContent = item.Puesto;
            Tiempo.classList.add("tiempo");
            Tiempo.textContent = item.Tiempo;
            Descripcion.classList.add("Descripcion");
            Descripcion.textContent = item.Descripcion;

            DivCont.appendChild(DivVacio);
            DivCont.appendChild(DivCajaTexto);
            DivCajaTexto.appendChild(DivCirculoExp);
            DivCajaTexto.appendChild(DivInfo);
            DivInfo.appendChild(TituloExp);
            DivInfo.appendChild(Puesto);
            DivInfo.appendChild(Tiempo);
            DivInfo.appendChild(Descripcion);

            contenedor.appendChild(DivCont);
        } else if (item.Tipo === "Educacion") {
            // Creación de elementos para educación
            const DivContEdu = document.createElement('div');
            const DivVacioEdu = document.createElement('div');
            const DivCajaTextoEdu = document.createElement('div');
            const DivCirculoEdu = document.createElement('div');
            const DivInfoEdu = document.createElement('div');
            const TituloEdu = document.createElement('h5');
            const TiempoEdu = document.createElement('p');
            const DescripcionEdu = document.createElement('p');

            DivContEdu.classList.add("cont");
            DivVacioEdu.classList.add("vacio");
            DivCajaTextoEdu.classList.add("caja-texto", "flex-end");
            DivCirculoEdu.classList.add("circuloEdu");
            DivInfoEdu.classList.add("info", "TextRight");
            TituloEdu.textContent = item.Titulo;
            TiempoEdu.classList.add("tiempo");
            TiempoEdu.textContent = item.Tiempo;
            DescripcionEdu.classList.add("Descripcion");
            DescripcionEdu.textContent = item.Descripcion;

            DivContEdu.appendChild(DivCajaTextoEdu);
            DivContEdu.appendChild(DivVacioEdu);
            DivCajaTextoEdu.appendChild(DivInfoEdu);
            DivCajaTextoEdu.appendChild(DivCirculoEdu);
            DivInfoEdu.appendChild(TituloEdu);
            DivInfoEdu.appendChild(TiempoEdu);
            DivInfoEdu.appendChild(DescripcionEdu);

            contenedor.appendChild(DivContEdu);
        }
    });
});
