function guardar(e){
    e.preventDefault();
    let name = document.getElementById('nombretxt').value 
    let correo = document.getElementById('correotxt').value
    let comentario = document.getElementById('comentariotxt').value

    let inputValue = ({
        "nombre": name,
        "correo": correo,
        "comentario":comentario
    })
   
    let datos = JSON.parse(localStorage.getItem('comentarios')) ? JSON.parse(localStorage.getItem('comentarios')) : []
    console.log(inputValue)
    datos.push(inputValue)
    console.log(JSON.stringify(datos))
    localStorage.setItem('comentarios', JSON.stringify(datos))
   

  document.getElementById('nombretxt').value = ''
  document.getElementById('correotxt').value = ''
  document.getElementById('comentariotxt').value = '' 

 render()
}


function render(){
   
    console.log(localStorage.getItem('comentarios'))
    let lista = document.getElementById('lista')
    
    let datos = JSON.parse(localStorage.getItem('comentarios')) ? JSON.parse(localStorage.getItem('comentarios')) : []
    lista.innerHTML = `
    <thead>
    <th>Nombre</th>
    <th>Correo</th>
    <th>Comentario</th>
    <thead>
    `
    datos.forEach((element,index) => {
        console.log(index)
        lista.innerHTML += `
        <td> ${element.nombre}</td>
        <td> ${element.correo} </td>
        <td> ${element.comentario} </td>
        <td><button onclick="edit(${index})" class="btn btn-warning">Editar </button></td>
        <td><button onclick="borrar(${index})" class="btn btn-danger">Borrar</button></td>
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
     let lista = document.getElementById('lista')
     let datos = JSON.parse(localStorage.getItem('comentarios')) ? JSON.parse(localStorage.getItem  ('comentarios')) : []
      datos.forEach(el =>{
        lista.innerHTML = `
        <thead>
        <th>Nombre</th>
        <th>Correo</th>
        <th>Comentario</th>
        <thead>
        <tbody class="table-warning">
       <td><input placeholder="${el.nombre}" id="nombredit"></input></td>
       <td><input placeholder="${el.correo}" id="correoedit" ></input> </td>
       <td><input placeholder="${el.comentario}" id="comentedit"></input> </td>
       <td><button onclick="reguardar()"  class="btn btn-primary" >Guardar</button> </td>
        <td><button onclick="cerrar(this)" class="btn btn-danger" >Cerrar</button> </td>
        <tbody>
        `

    })
   
    

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