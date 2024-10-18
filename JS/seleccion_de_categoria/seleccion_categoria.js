//elimina datos existentes de la galeria actual:
const eliminacion_galeria = () => {
    let LISTA = GALERIA.children;

    while (LISTA.length > 0) {
        LISTA[0].remove();
    }
};


// carga solo los elementos de la categoria seleccionada:
const seleccion_categoria = (categoria) => {
    eliminacion_opciones();
    eliminacion_galeria();

    for (let i = 0; i < LIMITE_DE_CARGA; i++) {
        const URL = "https://pokeapi.co/api/v2/pokemon/" + i;

        fetch(URL)
            .then(Response => Response.json())
            .then(dato => {
                const imagen = dato.sprites.other.dream_world.front_default;
                const nombrePokemon = dato.name;
                const tipo = dato.types[0].type.name;
                const posicion = dato.id;

                const salud = dato.stats[0].base_stat;
                const ataque = dato.stats[1].base_stat;
                const defensa = dato.stats[2].base_stat;
                const ataque_especial = dato.stats[3].base_stat;
                const defensa_especial = dato.stats[4].base_stat;
                const velocidad = dato.stats[5].base_stat;

                if (categoria == tipo) {
                    //creacion de elementos:
                    //li
                    const LI = document.createElement("li");
                    //cont li interno
                    const CONT_LI_INTERNO = document.createElement("div");
                    CONT_LI_INTERNO.setAttribute("class", "cont_Li_interno");
                    //cont imagen
                    const CONT_IMAGEN = document.createElement("cont_imagen");
                    CONT_IMAGEN.setAttribute("class", "cont_imagen");
                    //imagen
                    const IMG = document.createElement("img");
                    IMG.setAttribute("src", imagen);
                    //Nombre pokemon
                    const NOMBRE_POKEMON = document.createElement("h3");
                    NOMBRE_POKEMON.textContent = nombrePokemon;
                    // tipo pokemon
                    const TIPO_POKEMON = document.createElement("p");
                    TIPO_POKEMON.textContent = "Tipo: " + tipo;
                    // posicion
                    const POSICION_POKEMON = document.createElement("p");
                    POSICION_POKEMON.textContent = "N°: " + posicion;

                    //introducimiento:
                    CONT_IMAGEN.appendChild(IMG);

                    CONT_LI_INTERNO.append(CONT_IMAGEN, NOMBRE_POKEMON, TIPO_POKEMON, POSICION_POKEMON);

                    LI.appendChild(CONT_LI_INTERNO);
                    GALERIA.appendChild(LI);

                    LI.addEventListener("click", () => VENTANA_MODAL(imagen, nombrePokemon, salud, ataque, defensa, ataque_especial, defensa_especial, velocidad));
                    agregando_elementos_a_la_lista(nombrePokemon)
                }
            })

    }
};



//verifica que la pagina este disponible para cada categoria:
const COMPROBACION_ESTADO_DE_PAGINA_CATEGORIA = (categoria) => {
    const CONT_LOGO_VERIFICACION = document.getElementById("cont_verificacion");
    const IMAGEN_VERIFICAION = document.getElementById("imagen_verificacion");
    //link de comprobacion:
    const LINK = "https://pokeapi.co/api/v2/pokemon/1";

    fetch(LINK)
        .then(response => {
            if (!response.ok) {
                throw new Error('La solicitud no fue exitosa');
            }
            return response.json();
        })
        .then(() => {
            CONT_LOGO_VERIFICACION.style.visibility = "hidden";
            seleccion_categoria(categoria);

        })
        .catch(error => {
            //console.log("error: " + error);
            setTimeout(() => {
                eliminacion_galeria();
                CONT_LOGO_VERIFICACION.style.visibility = "visible";
                IMAGEN_VERIFICAION.setAttribute("src", "./iconos/error.png");
                
                Swal.fire({
                    title: 'Error!',
                    text: error.message,
                    icon: 'error',
                    confirmButtonText: 'Cool'
                });
            }, 400)
        });
};