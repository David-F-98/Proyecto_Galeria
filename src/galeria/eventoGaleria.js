import cerrarGaleria from "./cerrarGaleria";
import slideclick from "./slideClick";
import { cargarAnteriorSiguiente } from "./cargarImagen";

const galeria = document.getElementById('galeria');
galeria.addEventListener('click',(e)=>{
    const boton = (e.target.closest('button'));
    if(boton?.dataset?.accion === 'cerrar-galeria'){
        cerrarGaleria();
    };


    if(e.target.dataset.id){
        slideclick(e);
    };


    if(boton?.dataset?.accion === 'siguiente-imagen'){
        cargarAnteriorSiguiente('Siguiente');
    };

    
    if(boton?.dataset?.accion === 'anterior-imagen'){
        cargarAnteriorSiguiente('Anterior');
    };
})