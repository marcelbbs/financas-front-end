var btnProxMes = document.querySelector("#mes-proximo");

btnProxMes.addEventListener("click",function(){   
    var spanMesAno  = document.querySelector("#mesAno");
    var mesAno = spanMesAno.textContent;
    var proximoMesAno = getDescricaoProximoMesAno(mesAno);
    spanMesAno.textContent = proximoMesAno; 
});

function getDescricaoProximoMesAno(mesAno){
    
    var arrayMesAno = mesAno.split("/");
    var mes = arrayMesAno[0].trim();
    var ano = arrayMesAno[1].trim();
    var indiceMesAtual = descobreIndiceMes(mes);
    var indiceProximoMes =     indiceMesAtual+1;
    var proximoAno = parseInt(ano);
    if(indiceProximoMes==12)
        proximoAno+=1;
    var descricaoProxMes = getDescricaoMes(indiceProximoMes);
    return descricaoProxMes + " / " + proximoAno;
}

var btmAntMes = document.querySelector("#mes-anterior");

btmAntMes.addEventListener("click", function(){
    var spanMesAno = document.querySelector("#mesAno");
    var mesAno = spanMesAno.textContent;
    var anteriorMesAno = getDescricaoAnteriorMesAno(mesAno);
    spanMesAno.textContent = anteriorMesAno;
})

function getDescricaoAnteriorMesAno(mesAno){
    var arrayMesAno = mesAno.split("/");
    var mes = arrayMesAno[0].trim();
    var ano  = arrayMesAno[1].trim();
    var indiceMesAtual = descobreIndiceMes(mes);
    var indiceAnteriorMes = indiceMesAtual -1;
    var anteriorAno = parseInt(ano);
    if(indiceAnteriorMes==-1){
        anteriorAno -=1;
        indiceAnteriorMes=11;
    }
    var descricaoAntMes = getDescricaoMes(indiceAnteriorMes);
    return descricaoAntMes +" / "+anteriorAno;
}