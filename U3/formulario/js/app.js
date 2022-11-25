
console.log("Ejecutando");

//const formulario = document.querySelector('#formulario')

const formulario = document.getElementById('formulario')

formulario.addEventListener('submit', e => {
    console.log('click en enviar')
    e.preventDefault()

    const datos = new FormData(formulario)
    
})

console.log('campo email', datos.get('emailCampo'))
console.log('campo contraseña', datos.get('passCampo'))
formulario.reset()



