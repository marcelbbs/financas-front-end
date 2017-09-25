var mes;
var ano;
//Obtem mes/ano atual 
atualizaMesAno();
//obtem gastos do mes/ano e atualiza a tela
obtemGastos(mes,ano,usuario,carregaTabelaGastos,"");

//funções
function carregaTabelaGastos(gastos){
    tabela=document.querySelector("#tabela-gastos-previstos");
    tabela.innerHTML='';
    
    for(var i=0;i<gastos.length;i++){

        var vlPrev,vlTotRealizado ,vlSaldo =0;
        if (gastos[i].valor_previsto != null)
            vlPrev = gastos[i].valor_previsto.toFixed(2);
        if (gastos[i].total_realizado != null)
            vlTotRealizado = gastos[i].total_realizado.toFixed(2);
        if (gastos[i].saldo != null)
            vlSaldo = gastos[i].saldo.toFixed(2); 

        var trPrevisto=criaTrPrevisto(
            gastos[i].id
            ,gastos[i].descricao_previsto
            ,vlPrev
            ,vlTotRealizado
            ,vlSaldo);            
        tabela.appendChild(trPrevisto);
    }
}

function criaTrPrevisto(id,nomeGasto,valorPrevisto,totalRealizado,saldo){
    var trPrevisto = document.createElement("tr");
    
    if(nomeGasto==null)
        nomeGasto="";
    var inputNomePrevisto = montaInput("form-control","text","Digite o nome do gasto"
                                        ,"descricao","input-nome-previsto",nomeGasto,"");
    var hiddenId=montaInput("","hidden","","","hidden-id-previsto",id,"");

    var classesValor = ["form-control","monetario"];
    
    if (valorPrevisto==null)
        valorPrevisto="";
    var inputValorPrevisto = montaInput(classesValor,"text","Digite o valor previsto"
                                     ,"valor-previsto", "input-valor-previsto"
                                     ,mvalor(valorPrevisto.toString()),"" );
    inputValorPrevisto.addEventListener("change",atualizaSaldoOnBlur);
    
    if(totalRealizado==null)
        totalRealizado="";
    var spanRealizado = montaSpan("total-realizado",mvalor(totalRealizado.toString()));
    
    var classes =["btn", "btn-default", "btnrealizado"];

    var btnAbreRealizado = montaBotao(classes,"modal","#myModal","+");
    var spanSaldo = montaSpan("saldo",mvalor(saldo.toString()));
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

function descobreMesAnoAtual(){
    var currentTime = new Date();
    var idMes = currentTime.getMonth();
    mes = idMes;
    var dsMes = getDescricaoMes(idMes);
    var idAno = currentTime.getUTCFullYear();
    ano = idAno;
    var retorno = dsMes + ' / ' + ano;
    return retorno; 
}

function atualizaMesAno(){
    var spanMesAno = document.querySelector("#mesAno");
    var mesAno = descobreMesAnoAtual();
    spanMesAno.textContent = mesAno;
}