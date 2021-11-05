 function carregar() {

    let msg = window.document.querySelector('#msg')
    let foto = window.document.querySelector('#foto')
    let data = new Date()
    let hora = data.getHours()
    let minutos = data.getMinutes()
    let segundos = data.getSeconds()
    setInterval(carregar, 30000)
    
    
    // tops
    
    if(hora < 10) {
        hora = "0"+hora
    } if (minutos < 10) {
        minutos = "0"+minutos
    } if (segundos < 10) {
        segundos = "0"+segundos
    }
    

    msg.innerHTML = `<strong>Hora:</strong> ${hora}:${minutos}`

    if (hora >= 18 && hora <= 23) {
        foto.src = 'imagens/noitec.jpg'
        document.body.style.background = '#3f4249'
        
    } else if (hora >= 12 && hora < 18) {
        foto.src = 'imagens/tardec.jpg'
        document.body.style.background = '#c84a17'
    } else if (hora >= 0 && hora < 6){
        foto.src = 'imagens/madrugadac.jpg'
        document.body.style.background = '#081a1c'

    } else {
        foto.src = 'imagens/manhac.jpg'
        document.body.style.background = '#fb8428'
    }

    

   
    
}

function interagir () {
    let msg = window.document.querySelector('#msg')
    let foto = window.document.querySelector('#foto')
    let data = new Date()
    let hora = data.getHours()
    let minutos = data.getMinutes()
    let segundos = data.getSeconds()
    let horaM = window.document.querySelector('#horaMAnual')
    let horaMAnual = Number(horaM.value)
      
    
    
        
    
    hora = horaMAnual
    minutos = 0
    segundos = 0
    
    if(hora < 10) {
        hora = "0"+hora
    } if (minutos < 10) {
        minutos = "0"+minutos
    } if (segundos < 10) {
        segundos = "0"+segundos
    }
    

    msg.innerHTML = `<strong>Hora:</strong> ${hora}:${minutos}`

    if (hora >= 18 && hora < 23) {
        foto.src = 'imagens/noitec.jpg'
        document.body.style.background = '#3f4249'
        
    } else if (hora >= 12 && hora < 18) {
        foto.src = 'imagens/tardec.jpg'
        document.body.style.background = '#c84a17'
    } else if (hora >= 0 && hora < 6) {
        foto.src = 'imagens/madrugadac.jpg'
        document.body.style.background = '#081a1c'

    } else {
        foto.src = 'imagens/manhac.jpg'
        document.body.style.background = '#fb8428'
    }
    
    if (hora > 24) {
        window.alert('[ERRO] Digide um número entre 0 e 24!')
    }

    
}