function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        img.src = './imagens/manha.png'
    }else if(hora >=12 && hora <18){
        img.src = './imagens/tarde.png'
    }else{
        img.src= './imagens/noite.png'
    }
}