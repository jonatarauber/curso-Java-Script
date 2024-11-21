function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        if(fsex[0].checked){
            genero = 'Homem'
            if (idade >=0 && idade < 5){
                //bebe
            }else if (idade < 13){
                //criança
            }else if (idade < 20){
                //adolecente
            }else if (idade < 30){
                //jovem
            }else if (idade < 70){
                //adulto
            }else{
                //idoso
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade < 5){
                //bebe
            }else if (idade < 13){
                //criança
            }else if (idade < 20){
                //adolecente
            }else if (idade < 30){
                //jovem
            }else if (idade < 70){
                //adulto
            }else{
                //idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    }
}