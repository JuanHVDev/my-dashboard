import { PokemonGrid, PokemonsResponse, SimplePokemon, FavoritePokemons } from "@/app/pokemons/index";
import { IoHeartOutline } from "react-icons/io5";

const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> =>
{
  const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`).then(res => res.json())

  const pokemons = data.results.map(pokemon => ({
    id: pokemon.url.split('/').at(-2)!,
    name: pokemon.name
  }))
  return pokemons
}

export default async function PokemonsPage()
{

  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">Listado de Pokémons <small>estático</small></span>
      <FavoritePokemons />
    </div>
  );
}
