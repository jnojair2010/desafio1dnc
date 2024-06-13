var imagem =  window.document.getElementById("imagem-portifolio");
var infromacaoimagem = window.document.getElementById("informativo-imagem");
var click = false;

function apresentarImagemTelaInteira(){
    if (click ==false){

        imagem.style = "position:absolute";
        imagem.style = " float:left";
        imagem.style = "z-index: 10";
        imagem.style ="transform: translateX(-115%)";

        infromacaoimagem.style="position:relative";
        infromacaoimagem.style = " float:left";
        infromacaoimagem.style = "z-index: 5";
        infromacaoimagem.style ="transform: translateX(100%)";

    }
    else{

        imagem.style = "position:none";
        imagem.style = " float:left";
        imagem.style = "z-index: 1";
        imagem.style ="transform: translateX(0%)";

        infromacaoimagem.style="position:none";
        infromacaoimagem.style = " float:left";
        infromacaoimagem.style = "z-index: 1";
        infromacaoimagem.style ="transform: translateX(0%)";

    }
  

    click = !click;
    
   
}