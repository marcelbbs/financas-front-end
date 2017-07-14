//objetos
var trGastoRealizado=null;

var gastos=[];



//operações
function buscaGastoPorId(id){
    var retorno = null;
    gastos.forEach(function(gasto) {
        if(id==gasto.id)
            retorno= gasto;
    });
    return retorno;
}

function adicionaRealizadoNoConjuntoDeDados(id,dadosRealizado){
    var gasto = buscaGastoPorId(id);
    gasto.realizados.push(dadosRealizado);
}

//mocks

var realizados1=[];
var realizado1={
    descricao:"Banana",
    valor:"2.00"
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
        descricaoPrevisto : "Alimentação",
        valorPrevisto : 200.00,
        realizados:realizados1,
        totalRealizado: 10.0,
        saldo: 190.0
    }
    var gasto2 = {
        id:"2",
        descricaoPrevisto : "Saúde",
        valorPrevisto : 50.00,
        realizados:realizados2,
        totalRealizado: 20.0,
        saldo: 30.0
    }
    gastos.push(gasto1);
    gastos.push(gasto2);   
    return gastos;     
}
