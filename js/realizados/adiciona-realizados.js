
var adiciona = document.querySelector("#adicionarRealizado");

var realizadoValor = document.querySelector("#realizadoValor");
realizadoValor.addEventListener("keypress", function(event){
    mascara(this,mvalor);
});

adiciona.addEventListener("click", function(event){
    event.preventDefault();
    var dadosRealizado = obtemDadosRealizado();
    var erros=validaDadosRealizado(dadosRealizado);
    if(erros.length>0){
        exibeErros(erros);
        return;
    }

    adicionaRealizadoNaTabela(dadosRealizado);

    var id = trGastoRealizado.querySelector("#hidden-id-previsto").value;    
    adicionaRealizadoNoConjuntoDeDados(id,dadosRealizado);

    var vlTotalRealizado=incrementaRealizado(dadosRealizado.valor);
    var vlPrevisto = obtemValorPrevisto();
    var saldo = calculaSaldo(vlPrevisto,vlTotalRealizado);
    
    atualizaSaldoNaTela(saldo);
    
    limpaRealizado();
});

function obtemValorPrevisto(){
    var inputValorPrevisto = trGastoRealizado.querySelector("#input-valor-previsto").value;
    return parseMoedaToFloat(inputValorPrevisto);
}

function obtemDadosRealizado(){
    var realizado ={
        descricao: document.querySelector("#realizadoDescricao").value,
        valor: parseMoedaToFloat(document.querySelector("#realizadoValor").value)
    }
    return realizado; 
}

function validaDadosRealizado(realizado){
    var erros=[];

    if (realizado.descricao.length==0){
        erros.push("Descrição em branco");
    }
    if(realizado.valor.length==0){
        erros.push("Valor em branco");
    }
    return erros;
}

function montaTrRealizados(realizado){
    var tr = document.createElement("tr");
    var tdDescricao = montaTd("col-xs-8",realizado.descricao);
    var tdValor = montaTd("col-xs-4",parseFloatToMoeda(realizado.valor.toString()));
    
    tr.appendChild(tdDescricao);
    tr.appendChild(tdValor);
    return tr;
}

function exibeErros(erros){
    var ul = document.querySelector("#realizado-erros");
    ul.innerHTML="";   
    exibeMensagemErroNoUl(ul,erros);   
}

function atualizaSaldoNaTela(valorSaldo){
    var spanSaldo = trGastoRealizado.querySelector("#saldo");
    spanSaldo.textContent = parseFloatToMoeda(valorSaldo.toString());
}

function incrementaRealizado(valor){
    var spanTotalRealizado = trGastoRealizado.querySelector("#total-realizado");
    var totalRealizado = parseMoedaToFloat(spanTotalRealizado.textContent);
    valor = parseMoedaToFloat(valor);
    var resultado = totalRealizado + valor;
    resultado = resultado.toFixed(2);
    spanTotalRealizado.textContent=parseFloatToMoeda( resultado.toString());
    return resultado;
}

function adicionaRealizadoNaTabela(dadosRealizado){
    var tr=montaTrRealizados(dadosRealizado);
    var tabela = document.querySelector("#tabela-realizados");
    tabela.appendChild(tr);
}

function limpaRealizado(){
    var elForm = document.querySelector("#form-realizados");
    elForm.reset();        
}

