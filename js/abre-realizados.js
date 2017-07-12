var tabelaGasto = document.querySelector("#tabela-gastos");
tabelaGasto.addEventListener("click",function(event){
    
    if(event.target.tagName=='BUTTON'){
        
        var tr = event.target.parentNode.parentNode;
        
        if(tr.tagName=='TR'){
            
            trGastoRealizado = tr;

            //buscar os realizados do gasto previsto
            var id = trGastoRealizado.querySelector("#hidden-id-previsto").value;
            var gasto;
            if (gastos.length!=0){
                gasto=buscaGastoPorId(id);                
            }
            else{//adiciona novo
                gasto=obtemNovoGastoDoTr(id,trGastoRealizado);                
            }
            
            //limpa tabela de gastos
            limpaTabelaRealizados();
            populaTabelaDeRealizados(gasto.realizados);            
        }
    }
});
tabelaGasto.addEventListener("blur",function(event){
    var el = event.target;
    if (event.target.tagName='INPUT'){
        if(el.id == "input-nome-previsto"){
            
        }
    }
});

function obtemNovoGastoDoTr(id, tr){
    gasto.id = id;
    gasto.descricaoPrevisto = tr.querySelector("#input-nome-gasto-previsto").value;
    gasto.valorPrevisto = tr.querySelector("#input-valor-gasto-previsto").value;
    gasto.realizados=[];
    gasto.totalRealizado=0;
    gasto.saldo=0;
}
function limpaTabelaRealizados(){
    document.querySelector("#realizadoDescricao").value='';
    document.querySelector("#realizadoValor").value='';
    document.querySelector("#tabela-realizados").innerHTML='';
}

function populaTabelaDeRealizados(realizados){
    realizados.forEach(function(item){
        adicionaRealizadoNaTabela(item);
    })
}

