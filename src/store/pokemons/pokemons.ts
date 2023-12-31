import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SimplePokemon } from "../../app/pokemons/interfaces/simple-pokemon";

interface PokemonsState {
    favorites: { [key: string]: SimplePokemon };
}

const getInitialState = (): PokemonsState => {
    // if(typeof localStorage === undefined) return {}
    const favorites = JSON.parse(
        localStorage.getItem("favorite-pokemons") ?? "{}"
    );
    return favorites;
};

const initialState = {
    favorites: {},
    // ...getInitialState(),
    // "1": { id: "1", name: "bulbasaur" },
};

const pokemonsSlice = createSlice({
    name: "pokemons",
    initialState,
    reducers: {
        setFavoritePokemons(
            state,
            action: PayloadAction<{ [key: string]: SimplePokemon }>
        ) {
            state.favorites = action.payload;
        },
        toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
            const pokemon = action.payload;
            const { id } = pokemon;
            if ((!!state.favorites as any)[id]) {
                delete (state.favorites as any)[id];
                return;
            } else {
                (state.favorites as any)[id] = pokemon;
            }
            localStorage.setItem(
                "favorite-pokemons",
                JSON.stringify(state.favorites)
            );
        },
    },
});

export const { setFavoritePokemons, toggleFavorite } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
