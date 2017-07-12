function montaTd(classe,valor){
    var td = document.createElement("td");
    if (classe.length!=0)
        td.classList.add(classe);
    td.textContent = valor;
    return td;
}

function exibeMensagemErroNoUl(ul,erros){    
    erros.forEach(function(erro) {        
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}