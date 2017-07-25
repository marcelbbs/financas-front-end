
//arquivo de funções reutilizaveis

function montaTd(classe,valor){
    var td = document.createElement("td");
    if (classe.length!=0)
        td.classList.add(classe);
    if(typeof(valor)== "string")
        td.textContent=valor;
    else
        td.appendChild( valor);
    return td;
}

function exibeMensagemErroNoUl(ul,erros){    
    erros.forEach(function(erro) {        
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function montaInput(classe,tipo,placeholder,nome,id,valor,padrao){
    var el = document.createElement("input");

    if( typeof(classe)!="string"){
        classe.forEach(function(item){        
            el.classList.add(item);
        });
    }else if(classe.length!=0)
        el.classList.add(classe);        
    

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
    if(padrao.length!=0){
        el.setAttribute("pattern", padrao);
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

function montaBotao(classe,dataToogle,dataTarget,titulo){
    var el = document.createElement("button");
   
    classe.forEach(function(item){        
        el.classList.add(item);
    });
    if(dataToogle.length!=0){
        el.setAttribute("data-toggle",dataToogle);
    }
    if(dataTarget.length!=0){
        el.setAttribute("data-target",dataTarget);
    }
    if(titulo.length!=0){
        el.textContent=titulo;
    }
    return el;
}

function mascara(o, f) {
    v_obj = o
    v_fun = f
    setTimeout("execmascara()", 1)
}
function execmascara() {
    v_obj.value = v_fun(v_obj.value)
}
function mvalor(v) {
    v = v.replace(/\D/g, "");//Remove tudo o que não é dígito
  //  v = v.replace(/(\d)(\d{8})$/, "$1.$2");//coloca o ponto dos milhões
  //  v = v.replace(/(\d)(\d{5})$/, "$1.$2");//coloca o ponto dos milhares

    v = v.replace(/(\d)(\d{2})$/, "$1,$2");//coloca a virgula antes dos 2 últimos dígitos

    return v;
}
function parseFloatToMoeda(v){
    if(!v.includes(".00"))
        v = v+".00";
    return mvalor(v);
}

function parseMoedaToFloat(v){
    var ehTipoString = typeof(v);
    if(ehTipoString!="string")
        v = v.toString();
    var temVirgula = v.includes(",");
    if(temVirgula){
        v = v.replace(",",".");
    }else{
        v = v + ".00";
    }    
    return parseFloat(v);
}

