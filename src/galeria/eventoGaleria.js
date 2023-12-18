import cerrarGaleria from "./cerrarGaleria";
import slideclick from "./slideClick";
import { cargarAnteriorSiguiente } from "./cargarImagen";
import carrusel from "./carrusel";

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
        cargarAnteriorSiguiente();
    };

    
    if(boton?.dataset?.accion === 'anterior-imagen'){
        cargarAnteriorSiguiente();
    };
    

    if(boton?.dataset?.accion === 'siguiente-slide'){
        carrusel('siguiente');
    };

    
    if(boton?.dataset?.accion === 'anterior-slide'){
        carrusel('anterior');
    };
})