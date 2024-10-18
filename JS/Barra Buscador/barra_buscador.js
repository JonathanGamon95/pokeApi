const LISTA_DE_OPCIONES = document.getElementById("lista");

//agrega las etiquetas option a la lista de opciones:
const agregando_elementos_a_la_lista = (elemento) => {
    const OPCION = document.createElement("option");
    OPCION.textContent = elemento;
    LISTA_DE_OPCIONES.appendChild(OPCION);
};

//elimina las etiqueta options de la lista de opciones:
const eliminacion_opciones = () => {
    let LISTA = LISTA_DE_OPCIONES.children;

    while (LISTA.length > 0) {
        LISTA[0].remove();
    }
};