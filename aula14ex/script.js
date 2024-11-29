function contar(){
    var inicio = document.getElementById('numInicio')
    var fim = document.getElementById('numFim')
    var passos = document.getElementById('passos')
    var res = document.getElementById('res')
    if (inicio.value.lenght == 0 || fim.value.lenght == 0 || passos.value.lenght == 0){
        alert('[ERRO] faltam dados')
    }else {
        res.innerHTML='Contando: <br>'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passos.value)
    }if (p < 0){
        alert('Passos invalido! Considerando 1 passo')
        p= 1
    }if (i < f){
        for(var c = i; c <= f; c += p){
            res.innerHTML = `\u{1F449}${c}`
        }
    }

}