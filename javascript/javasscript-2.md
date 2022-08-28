   ## loops

## for ([expresao inicial]) ([condicao]) ([incremento])

## wile ([condicao]){
    [execucao]
}

var contador = 0;
while( contador < 10){
    contador++
}

var hora = 23;
while ( hora > 0){
    hora--;
    console.log(hora;)
}

console.log("total de horas:" + hora);

do {
    [execucao]
} while ([condicao])



var km;
var revisao = 3;

for(km = 0; km < revisao; km++ ){
console.log("apenas" + km +"kms  pode rodar");
}

### calcular media de alunos

var alunos = [
    [6,7,8,6],
    [8,0,9,10],
    [8,9,9,9]
    [8,6,6,7]
    [10,10,3,4]
]

var nota = 0;
 for (var i = 0; i < alunos.length; i++){

    nota = 0
    notasaluno = alunos[i]
    console.log("Aluno:" + parseInt(i+1));
    console.log("Notas:" + notasaluno)

    for( c = 0; c <notasaluno.length; c++){

        nota += notasaluno[c]
    }

    media = nota / 4;

    if( media >= 7) {
        resultado = "aprovado";
    } else{
        resultado = "reprovado"
    }

    console.log("Media" + media + " " + resultado);

 }

 ## funcoes



function calcularMedia ( notas){

    var soma = 0;
    for ( c = 0; c < notas.length; c++){
        soma += notas[c];
    }

    media = soma / notas.length;

    return media;
}

function aprovacao( media){
    let media = calcularMedia(notas);
    let condicao = media >= 7 ? "aprovado" : "reprovado";

    return "Media" + media + "- resultado" + condicao;
}

console.log (aprovacao([8, 8, 7]));

console.log("media:" + calcularMedia([8, 5, 10]))
console.log(aprovacao (calcularMedia([8, 5, 10]))) 

console.log (aprovacao([8, 8, 7, 9]));

console.log("media:" + calcularMedia([7, 8, 1]))
console.log(aprovacao (calcularMedia([7, 8, 1])))

console.log("media:" + calcularMedia([6, 8, 7]))
console.log(aprovacao (calcularMedia([6, 8, 7])))