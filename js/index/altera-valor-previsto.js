function atualizaSaldoOnBlur(event){  
    
    var inputSelec = event.target;
    if(inputSelec.name == "valor-previsto"){
        trGastoRealizado = event.target.parentNode.parentNode;
        var valorRealizado = trGastoRealizado.querySelector("#total-realizado").textContent;

        var saldo = calculaSaldoEAtualiza(parseMoedaToFloat(valorRealizado));
        
        alteraGastoPrevisto(trGastoRealizado);          
    }
}

function descobreId(){   
    var hiddenId=trGastoRealizado.querySelector("#hidden-id-previsto");
    return hiddenId.value;
}
// listener
var tabela = document.querySelector("#tabela-gastos-previstos");
tabela.addEventListener("keypress",function(event){
    var el = event.target;
    if (el.id=="input-valor-previsto"){
        mascara(el,mvalor);
    }
});

function calculaSaldoEAtualiza(valorRealizado){   
    var spanSaldo = trGastoRealizado.querySelector("#saldo");    
    saldo = parseMoedaToFloat(spanSaldo.textContent);    

    var inputValorPrevisto = trGastoRealizado.querySelector("#input-valor-previsto");
    valorPrevisto = parseFloat(inputValorPrevisto.value);
    
    spanSaldo.textContent = parseFloatToMoeda(calculaSaldo(valorPrevisto,valorRealizado));
    return saldo;
}
