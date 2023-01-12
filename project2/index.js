function guardar(){
    let name = document.getElementById('nombretxt').value 
    let correo = document.getElementById('correotxt').value
    let comentario = document.getElementById('comentariotxt').value

    let inputValue = ({
        "nombre": name,
        "correo": correo,
        "comentario":comentario
    })

   // operador ternario 
    let datos = JSON.parse(localStorage.getItem('comentarios')) ? JSON.parse(localStorage.getItem('comentarios')) : []
    console.log(inputValue)
    datos.push(inputValue)
    console.log(JSON.stringify(datos))
    localStorage.setItem('comentarios', JSON.stringify(datos))

    document.getElementById('nombretxt').value = ''
    document.getElementById('correotxt').value = ''
    document.getElementById('comentariostxt').value = ''
 render()
}

function render(){
    console.log(localStorage.getItem('comentarios'))
    let lista = document.getElementById('lista')
    let datos = JSON.parse(localStorage.getItem('comentarios')) ? JSON.parse(localStorage.getItem('comentarios')) : []
    lista.innerHTML = ''
    datos.forEach((element,index) => {
        console.log(index)
        lista.innerHTML += `
        <td> ${element.nombre}</td>
        <td> ${element.correo} </td>
        <td> ${element.comentario} </td>
        <button onclick="edit(${index})">Editar </button>
        <button onclick="borrar(${index})">Borrar</button>
        `
    });

}

 function borrar(position){
    let datos = JSON.parse(localStorage.getItem('comentarios')) ? JSON.parse(localStorage.getItem('comentarios')) : []
    console.log(datos.splice(position,1))
    console.log(JSON.stringify(datos))
    localStorage.setItem('comentarios',JSON.stringify(datos))
    render()
    console.log('borrado')
 }

 //Boton editar

  function edit(){
     let editar = document.getElementById("editar")
     editar.innerHTML = `
     <td><input placeholder="Nombre" id="nombredit"></input> </td>
     <td><input placeholder="Correo" id="correoedit" ></input> </td>
     <td><input placeholder="Comentario" id="comentedit"></input> </td>
     <td><button onclick="reguardar()">Guardar</button> </td>
     <td><button onclick="cerrar(this)">Cerrar</button> </td>
     `
 }

  function reguardar(element){
     let name = document.getElementById('nombredit').value 
     let email = document.getElementById('correoedit').value
     let commit = document.getElementById('comentedit').value

     let reinputValue = ({
         "nombre": name,
         "correo": email,
         "comentario":commit
     })

     let datos = JSON.parse(localStorage.getItem('comentarios')) ? JSON.parse(localStorage.getItem  ('comentarios')) : []
     console.log(reinputValue)
     datos.push(reinputValue)
     console.log(JSON.stringify(datos))
     datos.splice(element,1)
     console.log(datos)
     localStorage.setItem('comentarios',JSON.stringify(datos))
     render()
   }

   function cerrar(e){
    e.parentElement.parentElement.remove();
   }

render()