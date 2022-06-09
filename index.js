buscarPokemon();
async function buscarPokemon() {
  const { data } = await axios.get(
    "https://pokeapi.co/api/v2/pokemon/charizard"
  );
  mostraPokemon(data);
  console.log(data);
}

function mostraPokemon(data) {
  const nomePokemon = document.getElementById("nomePokemon");
  const imagemPokemon = document.getElementById("imagemPokemon");
  const tipoPokemon = document.getElementById("tipoPokemon");
  const pesoPokemon = document.getElementById("pesoPokemon");
  pesoPokemon.innerHTML += `${data.height} Kg.`;
  imagemPokemon.innerHTML = `<img src="${data.sprites.front_default}"/>`;
  nomePokemon.innerHTML = data.name;
  data.types.map((tipo, indice) => {
    tipoPokemon.innerHTML += `<p id="${indice}"> tipo: ${tipo.type.name}</p>`;
  });
}
