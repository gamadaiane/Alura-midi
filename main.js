function toca Som (idElementoAudio) {
document.querySelector(idElementoAudio).play();
}

const listaDeTeclas= document.querySelectorA11( '.tecla');

//para
for (let contador = 0;contador < listaDeTeclas.length; contador++){

    const tecla = listaDeTeclas];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function () {
        tocaSom(idAudio);
}

}