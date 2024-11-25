function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fAno.value.lenght == 0 || Number(fAno.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else {
        var fSex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        if(fSex[0].checked){
            genero = 'Homen'
            if (idade < 5){
                genero = 'Bebê'
                //bebe
            }else if(idade < 14){
                //criança
            }else if(idade < 20){
                //adolecente
            }else if(idade < 30){
                //jovem
            }else if(idade < 70){
                //adulto
            }else{
                //idoso
            }
        }else if(fSex[1].checked){
            genero= 'Mulher'
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    }
}