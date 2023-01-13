function guardar(){

let texto = document.getElementById('textotxt').value 

let inputvalue= ({
    "texto":texto
})

let datos = JSON.parse(localStorage.getItem('caja')) ?  JSON.parse(localStorage.getItem('caja')) : []
console.log(inputvalue)
datos.push(inputvalue)
console.log(JSON.stringify(datos))
localStorage.setItem('caja',JSON.stringify(datos))

render()
}

function render(){
    console.log(localStorage.getItem('caja'))

    let lista = document.getElementById('lista')

    lista.innerHTML=''

    let datos = JSON.parse(localStorage.getItem('caja')) ?  JSON.parse(localStorage.getItem('caja')) : []

    datos.forEach((element,index) => {
        lista.innerHTML += `
        <div>${element.texto}<div>
        <button onclick="editar(${index})">Editar</button>
        <button onclick="borrar(${index})">Borrar </button>
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
        <div>${nombre}<div>
        <button onclick="reguardar(${i})">Guardar</button>
        <button onclick="salir(this)">Salir</button>
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