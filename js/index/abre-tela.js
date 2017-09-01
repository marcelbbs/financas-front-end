
function obtemGastosEPopulaTabela(){    
    var xhr = new XMLHttpRequest();    

    xhr.addEventListener("load", function(){
        //testar se voltou 200
        gastos = JSON.parse(xhr.responseText);
        carregaTabelaGastos(gastos);      
    });

    obtemGastos(xhr);
}
//function obtemMockEPopulaTabela(){       
function obtemMockEPopulaTabela(mes,ano){       
    //var gastos = mockObtemGastos();
    var gastos = mockObtemGastos(mes,ano);
    carregaTabelaGastos(gastos);
}

var mes;
var ano;
atualizaMesAno();
//descomentar para mock
//obtemMockEPopulaTabela(); 
obtemMockEPopulaTabela(mes,ano); 
//obtemGastosEPopulaTabela();

function carregaTabelaGastos(gastos){
    tabela=document.querySelector("#tabela-gastos-previstos");

    for(var i=0;i<gastos.length;i++){
        var trPrevisto=criaTrPrevisto(
            gastos[i].id
            ,gastos[i].descricao_previsto
            ,gastos[i].valor_previsto.toFixed(2)
            ,gastos[i].total_realizado.toFixed(2)
            ,gastos[i].saldo.toFixed(2));            
        tabela.appendChild(trPrevisto);
    }
}

function populaTabelaDePrevistos(){
    var tdNomePrevisto = document.querySelector("");
}

function criaTrPrevisto(id,nomeGasto,valorPrevisto,totalRealizado,saldo){
    var trPrevisto = document.createElement("tr");
    //conteudos dos tds
    var inputNomePrevisto = montaInput("form-control","text","Digite o nome do gasto"
                                        ,"descricao","input-nome-previsto",nomeGasto,"");
    var hiddenId=montaInput("","hidden","","","hidden-id-previsto",id,"");

    var classesValor = ["form-control","monetario"];
    
    var inputValorPrevisto = montaInput(classesValor,"text","Digite o valor previsto"
                                     ,"valor-previsto", "input-valor-previsto"
                                     ,mvalor(valorPrevisto.toString()),"" );
    inputValorPrevisto.addEventListener("blur",atualizaSaldoOnBlur);
    
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