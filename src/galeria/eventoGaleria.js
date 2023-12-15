import cerrarGaleria from "./cerrarGaleria";

const galeria = document.getElementById('galeria');
galeria.addEventListener('click',(e)=>{
    const boton = (e.target.closest('button'));
    if(boton?.dataset?.accion === 'cerrar-galeria'){
        cerrarGaleria();
    }
})