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

function montaInput(classe,tipo,placeholder,nome,id,valor){
    var el = document.createElement("input");

    if(classe.length!=0){
        el.classList.add(classe);
    }
    if(tipo.length!=0){
        el.setAttribute("type",tipo);
    }
    if(placeholder.length!=0){
        el.setAttribute("placeholder",placeholder);
    }
    if(nome.length!=0){
        el.name = nome;
    }
    if(id.length!=0){
        el.id=id;
    }
    if(valor.length!=0){
        el.value=valor;
    }
    return el;
}

function montaSpan(id,valor){
    var el = document.createElement("span");
   
    if(id.length!=0){
        el.id=id;
    }
    if(valor.length!=0){
        el.textContent=valor;
    }
    return el;
}
