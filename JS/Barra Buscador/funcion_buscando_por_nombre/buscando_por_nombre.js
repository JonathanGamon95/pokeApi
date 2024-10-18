const INPUT_BUSCADOR = document.getElementById("barra_buscador");
const BOTON_BUSCADOR = document.getElementById("boton_buscador")

//busca los elemento de la galeria actual por el valor del input buscador:
const BUSCANDO = () => {
    for (let i = 0; i <= LIMITE_DE_CARGA; i++) {
        const URL = "https://pokeapi.co/api/v2/pokemon/" + i;

        fetch(URL)
            .then(Response => Response.json())
            .then(dato => {
                //datos obtenidos:
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

                if (nombrePokemon == INPUT_BUSCADOR.value) {
                    VENTANA_MODAL(imagen, nombrePokemon, salud, ataque, defensa, ataque_especial, defensa_especial, velocidad);
                    INPUT_BUSCADOR.value = "";
                }
            })
    }
};

BOTON_BUSCADOR.addEventListener("click", BUSCANDO)