import datos from "../datos/fotos";
import { cargarImagen } from "./cargarImagen";
const slideclick = (e)=>{
    let nombre, ruta , descripcion;
    const id = parseInt(e.target.dataset.id);
    const galeria = document.getElementById('galeria');
    const categoriaSelect = galeria.dataset.categoria;
    datos.fotos[categoriaSelect].forEach((foto) => {
        if(foto.id === id){
            ruta = foto.ruta;
            nombre = foto.nombre;
            descripcion = foto.descripcion;
        }
    });
    cargarImagen(id,nombre,ruta,descripcion);
};
export default slideclick;