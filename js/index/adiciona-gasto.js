var botaoAddGasto = document.querySelector("#botao-add-gasto");

botaoAddGasto.addEventListener("click",function(event){
    event.preventDefault();
    var ultimoId = descobreUltimoId();
    var gasto = {
        id:ultimoId,
        descricaoPrevisto : "",
        valorPrevisto : 0.00,
        realizados:[],
        totalRealizado: 0.0,
        saldo: 0.0,
        mesAno: obtemMesAnoSelecionado()
    }
    var tr = criaTrPrevisto(gasto.id,gasto.descricaoPrevisto
                        ,gasto.valorPrevisto,gasto.totalRealizado
                        ,gasto.saldo);
    gastos.push(gasto);
    //realiza post
    adicionaGastoPrevisto(gasto.id);
    var tabela=document.querySelector("#tabela-gastos-previstos");
    tabela.appendChild(tr);    
});

function descobreUltimoId(){
    return gastos.length;
} 

function obtemMesAnoSelecionado(){
    var spanMesAno = document.querySelector("#mesAno").textContent;
    var mesAnoArray=spanMesAno.split("/");
    var mesSel= descobreIndiceMes(mesAnoArray[0].trim()) +1;
    var anoSel= mesAnoArray[1].trim();
    return mes.toString() +ano.toString();
}

