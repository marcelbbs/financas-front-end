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
        saldo: 0.0
    }
    var tr = criaTrPrevisto(gasto.id,gasto.descricaoPrevisto
                        ,gasto.valorPrevisto,gasto.totalRealizado
                        ,gasto.saldo);
    gastos.push(gasto);
    var tabela=document.querySelector("#tabela-gastos-previstos");
    tabela.appendChild(tr);

    
});

function descobreUltimoId(){
    return gastos.length;
} 

