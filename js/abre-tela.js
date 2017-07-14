var urlObtemGastos="http://cryptic-hollows-48176.herokuapp.com/gasto/1";
var xhr = new XMLHttpRequest();    

xhr.addEventListener("load", function(){
    gastos = JSON.parse(xhr.responseText);

    var tabela=document.querySelector("#tabela-gastos-previstos");

    for(var i=0;i<gastos.length;i++){
        var trPrevisto=criaTrPrevisto(
            gastos[i].id
            ,gastos[i].descricao_previsto
            ,gastos[i].valor_previsto
            ,gastos[i].total_realizado
            ,gastos[i].saldo);
            
        tabela.appendChild(trPrevisto);
    }
});
xhr.open("GET",urlObtemGastos);
xhr.send();

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
    
    var classes =["btn", "btn-default"];

    var btnAbreRealizado = montaBotao(classes,"modal","#myModal","+");
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




