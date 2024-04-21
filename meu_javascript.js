//alert('Este é um teste de inclusão js á partir de um arquivo externo ')

var n = 0;
function addNovo(){
    var element = document.getElementById("group")
    var copy= document.cloneNode(element);
    n++;

    copy.getElementsByTagName('label')[0].htmlFor= 'nome'+n;
    copy.getElementsByTagName('input')[0].id= 'nome'+n;
    copy.getElementsByTagName('label')[1].htmlFor= 'email'+n;
    copy.getElementsByTagName('input')[1].id= 'email'+n;

    element.parentNode.appendChild(copy);   
}