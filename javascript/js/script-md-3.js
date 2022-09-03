document.getElementById("formulario-01").addEventListener("submit", function(evento){
    
    evento.preventDefault();
    evento.stopPropagation();

    let dados = mew FormData(this);

    let objeto = {};

    let notas = [];

    for(let key of dados.keys()){
        objeto[key] = dados.get(key);

        //adicionar intens no array
        notas.push(parseInt(dados.get(key)));
    }

    console.log(notas);

    console.log(objetos);

    texto = aprovado(notas)

    document.getElementById("resultado").innerHTML = texto;
});