let contOpcionesColor = document.querySelector('.formato-color');
let btnCambioColor = document.querySelector('.btn-color');
let main = document.querySelector('.main');

let resultadoColor = document.querySelector('.resultado-color');
let resultadoMuestra = document.querySelector('.resultado-muestra');

window.addEventListener('load', ()=>{
    
    btnCambioColor.addEventListener('click', cambiarColor);
    resultadoMuestra.addEventListener('click', optenerColor);

});


function cambiarColor(){
    
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    const colorRandom = `rgb(${r}, ${g}, ${b})`

    mostrarColor(colorRandom);

}

function mostrarColor(color){
    main.style.backgroundColor = color;
    resultadoMuestra.style.backgroundColor = color;

    resultadoColor.textContent = color;

}


function optenerColor(){
    
    let colorSelect = resultadoMuestra.style.backgroundColor;

    navigator.clipboard.writeText(colorSelect);        

    alert("Color Copied!");
    
}