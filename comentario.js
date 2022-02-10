
let tabla = document.querySelector("#listacoment")
if(window.localStorage.length > 0) {
    const items = {...localStorage}
    for (const clave in items) {
        console.log(window.localStorage.length)
        tabla.innerHTML += `<div class="itemcomentario" id="${clave}"><div><p>${clave}</p><br><p>${items[clave]}</p></div><div>
        <button type="button" class="eliminar" onclick='borracomentario("${clave}")'>Eliminar</button>
        <button type="button" class="editar" onclick='editacomentario("${clave}","${items[clave]}")'>Editar</button></div></div><hr>` 
    
    }
}


function agregacomentario() {
    
    let autor =  document.querySelector("#autor").value
    let comentario = document.querySelector("#comentario").value 

    window.localStorage.setItem(autor,comentario)
    document.querySelector("#listacoment").innerHTML+= `<div class="itemcomentario" id="${autor}"><div><p>${autor}<br></p><p>${comentario}</p></div><div>
                                                        <button type="button" class="eliminar" onclick='borracomentario("${autor}")'>Eliminar</button>
                                                        <button type="button" class="editar" onclick='editacomentario("${autor}","${comentario}")'>Editar</button></div></div><hr>`

    document.querySelector("#autor").value = ""
    document.querySelector("#comentario").value =""
}

function borracomentario(id) {
    window.localStorage.removeItem(id)
    let divselec = document.getElementById(id).remove()

}

function editacomentario(autor,comentario) {
    console.log(autor,comentario)
    document.querySelector("#autor").value = autor
    document.querySelector("#comentario").value = comentario
    let boton = document.querySelector("#procesaform")
   
    boton.innerHTML = "Editar"
    boton.setAttribute("onclick",`procesaedicion("${document.querySelector("#autor").value}")`)  
}   




    function procesaedicion(autororig) {
        let divselec = document.getElementById(autororig)
        let autor = document.querySelector("#autor").value
        let comentario = document.querySelector("#comentario").value
        window.localStorage.setItem(autor,comentario)
        divselec.innerHTML = `<div class="itemcomentario" id="${autor}"><div><p>${autor}</p><p>${comentario}</p></div><div>
        <button type="button" class="eliminar" onclick='borracomentario("${autor}")'>Eliminar</button>
        <button type="button" class="editar" onclick='editacomentario("${autor}","${comentario}")'>Editar</button></div></div><hr>`
        document.querySelector("#autor").value = ""
        document.querySelector("#comentario").value =""
        let boton = document.querySelector("#procesaform")
        boton.innerHTML = "Agregar"
        boton.setAttribute("onclick","agregacomentario()")
    }

