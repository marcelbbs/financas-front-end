var trEditado=null;

var tabelaGasto = document.querySelector("#tabela-gastos");
tabelaGasto.addEventListener("click",function(event){
    if(event.target.tagName=='BUTTON'){
        var tr = event.target.parentNode.parentNode.parentNode;
        if(tr.tagName=='TR'){
            trEditado = tr;
        }
    }
});

function incrementaRealizado(valorRealizado){
    var spanTotalRealizado = trEditado.querySelector("#total-realizado");
    var totalRealizado = parseFloat(spanTotalRealizado.textContent);
    var resultado = totalRealizado + parseFloat(valorRealizado);
    spanTotalRealizado.textContent= resultado.toFixed(2);
    return resultado;
}

function calculaSaldo(valorRealizado){
    var spanSaldo = trEditado.querySelector("#saldo");
    saldo = parseFloat(spanSaldo.textContent);
    spanSaldo.textContent = saldo+valorRealizado;
}

