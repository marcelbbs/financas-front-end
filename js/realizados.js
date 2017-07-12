
var adiciona = document.querySelector("#adicionarRealizado");

adiciona.addEventListener("click", function(event){
    event.preventDefault();
    var dadosRealizado=obtemDadosRealizado();
    var erros=validaDadosRealizado(dadosRealizado);
    var ul = document.querySelector("#realizado-erros");
    ul.innerHTML="";
    if(erros.length>0){
        exibeMensagemErroNoUl(ul,erros);
        return;
    }
    var tr=montaTrRealizados(dadosRealizado);
    var tabela = document.querySelector("#tabela-realizados");
    tabela.appendChild(tr);

    var resultado=incrementaRealizado(dadosRealizado.valor);
    calculaSaldo(resultado);   
});

function obtemDadosRealizado(){
    var realizado={
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
