function playSonido(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const listaTeclas = document.querySelectorAll('.tecla');

for(let contador =0; contador < listaTeclas.length; contador++){
    const tecla = listaTeclas[contador]
    const instrumento = tecla.classList[1];
   

    const idAudio = `#sonido_${instrumento}`;
    console.log (idAudio)

    tecla.onclick = function(){
        playSonido(idAudio);
}
tecla.onkeydown = function (e){
   
    if (e.code ==='Space' || e.code === 'Enter'){
        tecla.classList.add("activa");
    }
    console.log (e.code ==='Space' || e.code === 'Enter')
}
tecla.onkeyup = function (){
     tecla.classList.remove("activa")

}
}


/*let contador = 0;
while (contador < 9){
    const tecla = listaTeclas[contador]
    const instrumento = tecla.classList[1];
   

    const idAudio = `#sonido_${instrumento}`;
    console.log (idAudio)

    tecla.onclick = function(){
        playSonido(idAudio);
    }
    contador = contador +1;
   
}
*/






