var tabela = document.querySelector("#tabela-gastos-previstos");

tabela.addEventListener("change",function(event){
    var el = event.target;
    var trPai = el.parentNode.parentNode;
    var idGasto = trPai.querySelector("#hidden-id-previsto").value;
    
    if (el.id == "input-nome-previsto")
    console.log("alteraram meu valor");
});