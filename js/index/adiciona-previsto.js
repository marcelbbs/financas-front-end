function atualizaSaldoOnBlur(event){        
    trGastoRealizado = event.target.parentNode.parentNode;
    var valorRealizado = trGastoRealizado.querySelector("#total-realizado").textContent;        
    

    var saldo = calculaSaldoEAtualiza(parseFloat(valorRealizado));

    /*var id =  descobreId(this);

    atualizaSaldo(saldo);*/

}

function descobreId(l){   
    var hiddenId=trGastoRealizado.querySelector("#hidden-id-previsto");
    return hiddenId.value;
}

var tabela = document.querySelector("#tabela-gastos-previstos");
tabela.addEventListener("keypress",function(event){
    var el = event.target;
    if (el.id="input-valor-previsto"){
        mascara(el,mvalor);
    }
});
