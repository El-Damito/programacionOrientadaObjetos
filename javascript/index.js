var car = new Car("AW456", new Account("Andres Torres", "EWQ234"))
car.passenger = 4;


const mostrandodatos = document.getElementById('conectando')
const mensajespan = document.getElementById('mensaje')
let comojodes

comojodes = ("(Nombre: " + car.driver.name + "\n) (Licencia: " + car.license + ")\n(Y su placa: " + car.driver.document + ")")
function crearmensaje(mensajealzar) {
    mostrandodatos.style.display = 'none'
    let mensaje1 = document.createElement('p')


    mensaje1.innerHTML = comojodes
    mostrandodatos.innerHTML = mensajealzar

    mensajespan.appendChild(mensaje1)

}

window.addEventListener('load',crearmensaje)