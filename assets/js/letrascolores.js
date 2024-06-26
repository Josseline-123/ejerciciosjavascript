divElemento.style.width="200px";
divElemento.style.height="200px";
divElemento.style.border="2px solid black";
divElemento.style.backgroundColor="#F4F6F7 ";
document.addEventListener("keydown", function(event) {
    // Comprobamos si la tecla presionada es "A" o "a"
    if (event.key === "a" ) {divElemento.style.backgroundColor="#D98880 "
    }

    if (event.key === "d" ) {divElemento.style.backgroundColor="#E67E22"
    }

    if (event.key === "s" ) {divElemento.style.backgroundColor="#85C1E9 "
    }



})
document.addEventListener("keydown", function(e) {
    // Comprobamos si la tecla presionada es "A" o "a"
    if (e.key === "q" || e.key === "w" || e.key === "e") {
    // Si es "A" o "a", llamamos a la función agregarElemento
    agregarElemento();

    if (e.key === "q" ) {nuevoElemento.style.backgroundColor="#6C3483"
    }

    if (e.key === "w" ) {nuevoElemento.style.backgroundColor="#A6ACAF "
    }

    if (e.key === "e" ) {nuevoElemento.style.backgroundColor="#6E2C00"
    }


    }});
   
    function agregarElemento() {
    // Obtenemos el elemento contenedor por su ID
    contenedor = document.getElementById("contenedor");
    // Creamos un nuevo elemento <div>
    nuevoElemento = document.createElement("div");
    // Asignamos un texto al nuevo elemento
    nuevoElemento.style.width="200px";
    nuevoElemento.style.height="200px";
    nuevoElemento.style.border="2px solid black";
    nuevoElemento.backgroundColor="#6C3483"

    nuevoElemento.addEventListener("click", () =>{})
    // Agregamos el nuevo elemento al contenedor
    document.body.appendChild(nuevoElemento);



   
        



   

    }

   
