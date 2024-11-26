function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    var corFundo = document.getElementById('corFundo')
    if(fAno.value.lenght == 0 || Number(fAno.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else {
        var fSex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fSex[0].checked){
            corFundo.style.background = 'blue'
            if (idade < 5){
                genero = 'Bebê'
                img.setAttribute('src' , 'imagens/bebeMenino.png')
                //bebe
            }else if(idade < 12){
                genero = 'Criança'
                //criança
            }else if(idade < 20){
                genero = 'Adolescente'
                //adolecente
            }else if(idade < 30){
                genero = 'Jovem homen'
                //jovem
            }else if(idade < 70){
                genero = 'Homen adulto'
                //adulto
            }else{
                genero = 'Homen idoso'
                //idoso
            }
        }else if(fSex[1].checked){
           
            if(idade < 5){
                genero = 'Bebê'
            }else if(idade < 12){
                genero = 'Crinaça'
            }else if(idade < 20){
                genero = 'Adolescente'
            }else if(idade < 30){
                genero = 'Jovem mulher'
            }else if(idade < 70){
                genero = 'Mulher adulta'
            }else {
                genero = 'Mulher idiosa'
                
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}