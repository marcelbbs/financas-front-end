
var adiciona = document.querySelector("#adicionarRealizado");

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

    var resultado=incrementaRealizado(dadosRealizado.valor);
    calculaSaldo(resultado);   
    limpaRealizado();
});

function obtemDadosRealizado(){
    var realizado ={
        descricao: document.querySelector("#realizadoDescricao").value,
        valor: document.querySelector("#realizadoValor").value
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
    var tdValor = montaTd("col-xs-4",realizado.valor);
    tr.appendChild(tdDescricao);
    tr.appendChild(tdValor);
    return tr;
}

function exibeErros(erros){
    var ul = document.querySelector("#realizado-erros");
    ul.innerHTML="";   
    exibeMensagemErroNoUl(ul,erros);   
}

function calculaSaldo(valorRealizado){
    var spanSaldo = trGastoRealizado.querySelector("#saldo");
    saldo = parseFloat(spanSaldo.textContent);
    spanSaldo.textContent = saldo+valorRealizado;
}

function incrementaRealizado(valorRealizado){
    var spanTotalRealizado = trGastoRealizado.querySelector("#total-realizado");
    var totalRealizado = parseFloat(spanTotalRealizado.textContent);
    var resultado = totalRealizado + parseFloat(valorRealizado);
    spanTotalRealizado.textContent= resultado.toFixed(2);
    return resultado;
}

function adicionaRealizadoNaTabela(dadosRealizado){
    var tr=montaTrRealizados(dadosRealizado);
    var tabela = document.querySelector("#tabela-realizados");
    tabela.appendChild(tr);
}

function limpaRealizado(){
    var formulario = document.querySelector("#form-realizados");
    formulario.reset();
        
}

