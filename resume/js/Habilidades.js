import habilidades from './Habilidades.mjs';

document.addEventListener("DOMContentLoaded", () => {
    const objJSON = habilidades.Habilidades;

    for (let i = 0; i < objJSON.length; i++) {
        const DivCategoria = document.createElement('div');
        const H3 = document.createElement('h3');

        DivCategoria.classList.add("Categoria", "col-md-12", "col-lg-6");
        H3.textContent = objJSON[i].Categoria;

        DivCategoria.appendChild(H3);

        const skills = objJSON[i].Skills;

        for (let j = 0; j < skills.length; j++) {
            const DivContPrincipal = document.createElement('div');
            const DivContHabilidad = document.createElement('div');
            const DivBarraPorcentaje = document.createElement('div');
            const NombreHabilidad = document.createElement('p');
            const TextPorcent = document.createElement('p');

            DivContPrincipal.classList.add("cont-PorcentajePrincipal");
            DivContHabilidad.classList.add("ContenedorHabilidad");
            DivBarraPorcentaje.classList.add("BarraPocentaje");
            DivBarraPorcentaje.style.width = skills[j].Porcentaje + "%";

            NombreHabilidad.textContent = skills[j].Nombre;
            TextPorcent.textContent = skills[j].Porcentaje + "%";
            TextPorcent.classList.add("TextPorcent");

            DivCategoria.appendChild(DivContPrincipal);
            DivContPrincipal.appendChild(DivContHabilidad);
            DivContPrincipal.appendChild(TextPorcent);
            DivContHabilidad.appendChild(DivBarraPorcentaje);
            DivBarraPorcentaje.appendChild(NombreHabilidad);
        }

        const Contenedor = document.getElementById('ContenedorHabilidades');
        Contenedor.appendChild(DivCategoria);
    }
});
