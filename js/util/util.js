
//arquivo de funções reutilizaveis

//gerais
function exibeMensagemAposHttp(msg){
    if (msg==undefined){
        console.log("Sucesso");
    } else{
        console.log("Erro");
        alert(msg);
    }
}

function exibeMensagemErroNoUl(ul,erros){    
    erros.forEach(function(erro) {        
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

//montagem de tela
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
    if(valor!=null&&valor.length!=0){
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

function montaBotao(classe,dataToogle,dataTarget,titulo,id){
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
    if (id.length!=''){
        el.id = id;
    }
    return el;
}

//valores
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
    if(!v.toString().includes("."))
        v = v+".00";
    v = v.replace(".",",");
    return v;
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
//meses
var meses = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto"
        ,"Setembro","Outubro","Novembro","Dezembro"];

function getDescricaoMes(num){   
    if(num==12){
        return "Janeiro";
    } 
    return meses[num];
}

function descobreIndiceMes(mes){
    return meses.indexOf(mes);
}

//to integration
function doHttp(op,url,params,callSuccess,callError){
    var xhr = new XMLHttpRequest();

    xhr.open(op, url,true);
    
    xhr.addEventListener("load", function(){
        if(xhr.status ==200){
            callSuccess(xhr.responseText);
        }else{
            callError(xhr);
        }
    })
    if(params.length==0)
        params=null;
    
    xhr.send(params);   
    
}
function doPost(url,params,callSuccess,callError){
    doHttp("POST",url,params,callSuccess,callError);
}

function doGet(url,params,callSuccess,callError){
    url += params;
    console.log(url);
    doHttp("GET",url,params,callSuccess,callError);
}

function doPut(url,params,callSuccess,callError){
    doHttp("PUT", url, params, callSuccess, callError);
}