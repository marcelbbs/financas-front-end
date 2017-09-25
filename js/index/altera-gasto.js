var tabela = document.querySelector("#tabela-gastos-previstos");

tabela.addEventListener("change",function(event){
    var el = event.target;
    var trPai = el.parentNode.parentNode;
    
    var idGasto = trPai.querySelector("#hidden-id-previsto").value;
    
    if (el.id == "input-nome-previsto"){
        alteraGastoPrevisto(trPai);
    }
});

function alteraGastoPrevisto( tr){
    var valor = tr.querySelector("#input-valor-previsto").value;
    var realizado = tr.querySelector("#total-realizado").textContent;
    var saldo = tr.querySelector("#saldo").textContent;
    var id = tr.querySelector("#hidden-id-previsto").value;
    var nome = tr.querySelector("#input-nome-previsto").value;
   
    atualizaGastoPrevisto(id,nome,valor, realizado, 
        saldo, exibeMensagemAposHttp,exibeMensagemAposHttp );
}