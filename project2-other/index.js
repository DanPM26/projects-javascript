const formulario = document.querySelector('#formulario')
formulario.addEventListener('submit', guardar)

function guardar(e){
    e.preventDefault();
let texto = document.getElementById('textotxt').value 

let inputvalue= ({
    "texto":texto
})

let datos = JSON.parse(localStorage.getItem('caja')) ?  JSON.parse(localStorage.getItem('caja')) : []
console.log(inputvalue)
datos.push(inputvalue)
console.log(JSON.stringify(datos))
localStorage.setItem('caja',JSON.stringify(datos))


document.getElementById('textotxt').value = ''
render()
}

function render(){
    console.log(localStorage.getItem('caja'))

    let lista = document.getElementById('lista')

    lista.innerHTML=`
    <table>
    <thead>
    <th>Lo que haremos hoy (:</th>
    </thead>
    </table>
    `

    let datos = JSON.parse(localStorage.getItem('caja')) ?  JSON.parse(localStorage.getItem('caja')) : []

    datos.forEach((element,index) => {
        lista.innerHTML += `

        <td>${element.texto}<td>
        <td> <button onclick="editar(${index})" class="btn btn-warning">Editar</button><td>
        <td> <button onclick="borrar(${index})" class="btn btn-danger" >Borrar </button><td>
        
        `
    });
}

function borrar(position){
    let datos = JSON.parse(localStorage.getItem('caja')) ?  JSON.parse(localStorage.getItem('caja')) : []
    console.log(datos.splice(position,1))
    console.log(JSON.stringify(datos))
    localStorage.setItem('caja',JSON.stringify(datos))
    render()
    console.log('borrado')
}

function editar(ps){
let datos = JSON.parse(localStorage.getItem('caja')) ?  JSON.parse(localStorage.getItem('caja')) : []
for(i=0; i <= datos.length; i++){
    if(i == ps){
        document.getElementById('textotxt').value = datos[i].texto
         
        let nombre = datos[i].texto

        let lista = document.getElementById('lista')
        lista.innerHTML=`
        <td>${nombre}<td>
        <td><button onclick="reguardar(${i})" class="btn btn-primary" >Guardar</button></td>
        <td><button onclick="salir(this)"  class="btn btn-danger" >Salir</button></td>
        `
    }
}

}

 function reguardar(i){
 let datos = JSON.parse(localStorage.getItem('caja')) ?  JSON.parse(localStorage.getItem('caja')) : []

 let reinput = ({
     "texto": document.getElementById('textotxt').value
 })
 
 datos[i] = reinput
console.log(datos[i])
localStorage.setItem('caja',JSON.stringify(datos))


document.getElementById('textotxt').value = ''
render()

}

function salir(e){
    e.parentElement.remove();
    render()
}


render()