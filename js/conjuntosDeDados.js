//objetos
var trGastoRealizado=null;
var gastos=[];
var urlObtemGastos="http://cryptic-hollows-48176.herokuapp.com/gasto/1";
var urlObtemRealizado="http://cryptic-hollows-48176.herokuapp.com/gasto/";

//operações
function buscaGastoPorIdMock(id){
    var retorno = null;
    gastos.forEach(function(gasto) {
        if(id==gasto.id)
            retorno= gasto;
    });
    return retorno;
}

function buscaGastoPorId(id){
    var elGasto;    
    gastos.forEach(function(gasto) {
        if(id==gasto.id)
            elGasto= gasto;
    });

    var args = id + "/realizados";
    var xhr = new XMLHttpRequest();
    xhr.open("GET",urlObtemRealizado+args,false);
    xhr.send();        
   
    if(xhr.status==200){
        gastos.realizados= JSON.parse(xhr.responseText);        
        return gastos;
    }else{
        console.log("falha");
    }
}

function adicionaRealizadoNoConjuntoDeDados(id,dadosRealizado){
    var gasto = buscaGastoPorId(id);
    gasto.realizados.push(dadosRealizado);
}

//mocks

var realizados1=[];
var realizado1={
    descricao:"Banana",
    valor:"10.00"
}
var realizado2={
    descricao:"Pão",
    valor:"10.00"
}
realizados1.push(realizado1);
realizados1.push(realizado2);

var realizados2=[];
var realizado3={
    descricao:"remédio",
    valor:"10.00"
}
var realizado4={
    descricao:"Consulta",
    valor:"10.00"
}
realizados2.push(realizado3);
realizados2.push(realizado4);


function mockObtemGastos(){
    var gasto1 = {
        id:"1",
        descricao_previsto : "Alimentação",
        valor_previsto : 200.00,
        realizados:realizados1,
        total_realizado: 20.0,
        saldo: 180.0
    }
    var gasto2 = {
        id:"2",
        descricao_previsto : "Saúde",
        valor_previsto : 50.00,
        realizados:realizados2,
        total_realizado: 20.0,
        saldo: 30.0
    }
    gastos.push(gasto1);
    gastos.push(gasto2);   
    return gastos;     
}
