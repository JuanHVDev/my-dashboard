import { configureStore } from "@reduxjs/toolkit";
import counterReduce from "./counter/counterSlice";
import pokemonsReduce from "./pokemons/pokemons";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { localStorageMiddleware } from "./middlewares/localstorage-middlewares";
export const store = configureStore({
    reducer: {
        counter: counterReduce,
        pokemons: pokemonsReduce,
    },
    // middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware().concat(localStorageMiddleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
