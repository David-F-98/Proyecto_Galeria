import dataFotos from './datos/fotos';
const contenedorCategorias = document.getElementById("categorias");
const galeria = document.getElementById('galeria');

contenedorCategorias.addEventListener('click',(e)=>{
    e.preventDefault;
    if(e.target.closest('a')){
        galeria.classList.add('galeria--active');
        document.body.style.overflow = 'hidden';

        const categoriaSelect = e.target.dataset.categoria;
        const fotos = dataFotos.fotos[categoriaSelect];

        fotos.forEach((foto) => {
            const slide = `
                <a href="#" class="galeria__carousel-slide">
                    <img class="galeria__carousel-image" src="${foto.ruta}" alt="" />
                </a>`;
            galeria.querySelector('.galeria__carousel-slides').innerHTML += slide;
        });
        galeria.querySelector('.galeria__carousel-slide').classList.add('galeria__carousel-slide--active');
    };
    
})