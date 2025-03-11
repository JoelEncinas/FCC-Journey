const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const image = document.getElementById("sprite");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const types = document.getElementById("types");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");

searchBtn.addEventListener("click", () => {
  displayData(searchInput.value);
});

const fetchData = async (input) => {
  let url = `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${input.toLowerCase()}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    resetApp();
    alert("Pokémon not found");

    return null;
  }
};

const displayData = async (input) => {
  const data = await fetchData(input);
  if (data) {
    console.log(data);
    pokemonId.textContent = ` #${data.id}`;
    pokemonName.textContent = data.name;
    weight.innerHTML = `Weight: ${data.weight}`;
    height.innerHTML = `Height: ${data.height}`;
    image.src = data.sprites.front_default;

    if (data.types.length > 1) {
      types.innerHTML = `
        <span class="${data.types[0].type.name} type">
            ${data.types[0].type.name}
        </span>
        <span class="${data.types[1].type.name} type">
            ${data.types[1].type.name}
        </span>
        `;
    } else {
      types.innerHTML = `
        <span class="${data.types[0].type.name} type">
            ${data.types[0].type.name}
        </span>
        `;
    }

    hp.innerHTML = data.stats[0].base_stat;
    attack.innerHTML = data.stats[1].base_stat;
    defense.innerHTML = data.stats[2].base_stat;
    specialAttack.innerHTML = data.stats[3].base_stat;
    specialDefense.innerHTML = data.stats[4].base_stat;
    speed.innerHTML = data.stats[5].base_stat;
  }
};

const resetApp = () => {
  searchInput.value = "";
  pokemonId.textContent = "";
  pokemonName.textContent = "";
  weight.innerHTML = "";
  height.innerHTML = "";
  image.src = "";
  types.innerHTML = "";
  hp.innerHTML = "";
  attack.innerHTML = "";
  defense.innerHTML = "";
  specialAttack.innerHTML = "";
  specialDefense.innerHTML = "";
  speed.innerHTML = "";
};
