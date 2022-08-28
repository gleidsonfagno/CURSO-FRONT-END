function calcularMedia ( notas){

    var soma = 0;
    for ( c = 0; c < notas.length; c++){
        soma += notas[c];
    }

    media = soma / notas.length;

    return media;
}

function aprovacao( notas){
    let media = calcularMedia( notas );
    let condicao = media >= 7 ? "aprovado" : "reprovado";

    return "Media" + media + "- resultado" + condicao;
}

document.addEventListener("submit", function(evento){
    evento.preventDefault();

    let formulario = document.getElementById("formulario-01");

    let dados = mew FormData(formulario);

    let objeto = {};

    for(let key of dados.keys()){
        objeto[key] = dados.get(key);
    }

    console.log(objeto);
});