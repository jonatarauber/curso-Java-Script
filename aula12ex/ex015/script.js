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
                img.setAttribute('src' , 'imagens/criancaMenino.png')
                //criança
            }else if(idade < 20){
                genero = 'Adolescente'
                img.setAttribute('src', 'imagens/adolescenteHomen.png')
                //adolecente
            }else if(idade < 30){
                genero = 'Jovem homen'
                img.setAttribute('src' , 'imagens/jovemHomen.png')
                //jovem
            }else if(idade < 70){
                genero = 'Homen adulto'
                img.setAttribute('src' , 'imagens/adultoHomem.png')
                //adulto
            }else{
                genero = 'Homen idoso'
                img.setAttribute('src', 'imagens/idoso.png')
                //idoso
            }
        }else if(fSex[1].checked){
           corFundo.style.background='pink'
            if(idade < 5){
                genero = 'Bebê'
                img.setAttribute('src', 'imagens/bebeMenina.png')
            }else if(idade < 12){
                genero = 'Criança'
                img.setAttribute('src', 'imagens/criancaMenina.png')
            }else if(idade < 20){
                genero = 'Adolescente'
                img.setAttribute('src', 'imagens/adolescenteMulher.png')
            }else if(idade < 30){
                genero = 'Jovem mulher'
                img.setAttribute('src' ,'imagens/jovemMulher.png')
            }else if(idade < 70){
                genero = 'Mulher adulta'
                img.setAttribute('src', 'imagens/adultoMulher.png')
            }else {
                genero = 'Mulher idiosa'
                img.setAttribute('src', 'imagens/idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}