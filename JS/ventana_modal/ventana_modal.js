//ventana modal
const BODY_MODAL = document.getElementById("body_modal");
const MODAL_EXTERNO = document.getElementById("modal_externo");
const BOTON_CERRAR_MODAL = document.getElementById("boton_modal_cerrar");

//nombre e imagen modal
const IMAGEN_MODAL = document.getElementById("imagen_modal");
const NOMBRE_MODAL_POKEMON = document.getElementById("nombre_modal_pokemon");

//caracteristicas modal
const SALUD = document.getElementById("dalud");
const ATAQUE = document.getElementById("ataque");
const DEFENSA = document.getElementById("defensa");
const ATAQUE_ESPECIAL = document.getElementById("ataque_especial");
const DEFENSA_ESPECIAL = document.getElementById("defensa_especial");
const VELOCIDAD = document.getElementById("velocidad");



const VENTANA_MODAL = (imagen, nombrePokemon, salud, ataque, defensa, ataque_especial, defensa_especial, velocidad) => {
    IMAGEN_MODAL.setAttribute("src", imagen);
    NOMBRE_MODAL_POKEMON.textContent = nombrePokemon;

    SALUD.textContent = "Salud: " + salud;
    ATAQUE.textContent = "Ataque: " + ataque;
    DEFENSA.textContent = "Defensa: " + defensa;
    ATAQUE_ESPECIAL.textContent = "Ataque Especial: " + ataque_especial;
    DEFENSA_ESPECIAL.textContent = "Defensa Especial: " + defensa_especial;
    VELOCIDAD.textContent = "Velocidad: " + velocidad;

    BODY_MODAL.style.visibility = "visible";
    MODAL_EXTERNO.style.opacity = "100%";
};


const CERRAR_VENTANA = () => {
    MODAL_EXTERNO.style.opacity = "0%";
    BODY_MODAL.style.visibility = "hidden";
}

BOTON_CERRAR_MODAL.addEventListener("click", CERRAR_VENTANA);