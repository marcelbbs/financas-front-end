var tabelaGastos = document.querySelector("#tabela-gastos-previstos");

tabelaGastos.addEventListener("click", function(event){

    var elClicked = event.target;
    
    if (elClicked.tagName=='BUTTON' && elClicked.id == 'btn-remove-gasto'){
        console.log('removendo..');    

        var trRemoved = elClicked.parentNode.parentNode;
        trRemoved.classList.add("fadeOut") ;
        setTimeout(function(){
            trRemoved.remove()}, 500);
    } 
});