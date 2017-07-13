//var gastos = mockObtemGastos();

var tabela=document.querySelector("#tabela-gastos-previstos");

/*for(var i=0;i<gastos.length;i++){
    var trPrevisto=criaTrPrevisto(
         gastos[i].id
        ,gastos[i].descricaoPrevisto
        ,gastos[i].valorPrevisto
        ,gastos[i].totalRealizado
        ,gastos[i].saldo);
        
    tabela.appendChild(trPrevisto);
}*/

function populaTabelaDePrevistos(){
    var tdNomePrevisto = document.querySelector("");
}

function criaTrPrevisto(id,nomeGasto,valorPrevisto,totalRealizado,saldo){
    var trPrevisto = document.createElement("tr");
    //conteudos dos tds
    var inputNomePrevisto = montaInput("form-control","text","Digite o nome do gasto"
                                        ,"descricao","input-nome-previsto",nomeGasto);
    var hiddenId=montaInput("","hidden","","","hidden-id-previsto",id);
    var inputValorPrevisto = montaInput("form-control","text","Digite o valor previsto"
                                     ,"valor-previsto", "input-valor-previsto",valorPrevisto );
    var spanRealizado = montaSpan("total-realizado",totalRealizado);
    var btnAbreRealizado = montaBotao("btn btn-default","modal","#myModal","+");
    var spanSaldo = montaSpan("saldo",saldo);
    //tds
    var tdNomeGasto = montaTd("col-md-4", inputNomePrevisto);
    var tdValorPrevisto = montaTd("col-md-2",inputValorPrevisto);
   
    var tdRealizado = montaTd("col-md-2",spanRealizado);
    tdRealizado.appendChild(btnAbreRealizado);
    var tdSaldo = montaTd("col-md-2",spanSaldo);
    
    trPrevisto.appendChild(hiddenId);  
    trPrevisto.appendChild(tdNomeGasto);
    trPrevisto.appendChild(tdValorPrevisto);
    trPrevisto.appendChild(tdRealizado);
    trPrevisto.appendChild(tdSaldo);
    
    trPrevisto.id = "previsto-e-realizado";
    return trPrevisto;
}
//teste
console.log("obtendo url");



