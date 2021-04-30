function numero(numero){
    var msg = document.querySelector('div#tela p')
    
    var teste = parseFloat(msg.textContent)
    


    if(teste == '0'){
        msg.innerHTML = `${numero}`
    }else{
        msg.innerHTML += `${numero}`
    }

}
function operacao(operacao){
    var msg = document.querySelector('div#tela p')
    var teste = parseFloat(msg.textContent)
    alert(teste)
}