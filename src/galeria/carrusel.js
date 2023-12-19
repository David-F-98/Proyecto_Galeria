const galeria = document.getElementById('galeria');
const carrusel = (direccion)=>{
    const opciones = {
        root : document.querySelector('.galeria__carousel'),
        roootMargin:'0px',
        threshold :0.7
    }
    const observer = new IntersectionObserver((entradas)=>{

        const slideVisibles = entradas.filter((entrada)=>{
            if(entrada.isIntersecting){
                return entrada;
            }
        })

        if(direccion==='atras'){
            const primerSlideVisible = slideVisibles[0];
            const indexPrimerSlideVisible = entradas.indexOf(primerSlideVisible);
            if(indexPrimerSlideVisible >=1){
                entradas[indexPrimerSlideVisible - 1].target.scrollIntoView({
                    behavior:'smooth',
                    inline: 'start',
                });
            }
            
        } else if (direccion==='adelante'){
            const ultimaSlideVisible = slideVisibles[slideVisibles.length - 1];
            const indexUltimoSlideVisible = entradas.indexOf(ultimaSlideVisible);
            if((entradas.length - 1)> indexUltimoSlideVisible){
                entradas[indexUltimoSlideVisible + 1].target.scrollIntoView({
                    behavior:'smooth',
                    inline: 'start',
                })
            }
        };

        const slides = galeria.querySelectorAll('.galeria__carousel-slide');
        slides.forEach((slide)=>{
            observer.unobserve(slide);
        })
    }, opciones);
    
    const slides = galeria.querySelectorAll('.galeria__carousel-slide');
    slides.forEach((slide)=>{
        observer.observe(slide);
    });
};
export default carrusel;