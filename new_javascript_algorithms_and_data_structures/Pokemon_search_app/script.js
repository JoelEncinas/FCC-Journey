const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const types = document.getElementById("types");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("specialAttack");
const specialDefense = document.getElementById("specialDefense");
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
    console.error("Error fetching data:", error);
    return null;
  }
};

const displayData = async (input) => {
  const data = await fetchData(input);
  if (data) {
    console.log(data); // Process and update UI accordingly
  }
};
