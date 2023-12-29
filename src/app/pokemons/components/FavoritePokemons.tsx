"use client"

import React, { useEffect, useState } from 'react'
import { PokemonGrid, SimplePokemon } from '..'
import { useAppSelector } from '@/store'
import { IoHeartOutline } from 'react-icons/io5'

export const FavoritePokemons = () =>
{
  const favoritos = useAppSelector(state => Object.values(state.pokemons.favorites))
  // const [pokemons, setPokemons] = useState
  //   (favoritos)

  // useEffect(() =>
  // {
  //   setPokemons(favoritos)
  // }, [favoritos])

  return (
    <>
      {favoritos.length === 0 ? (<NoFavorites />) : (<PokemonGrid pokemons={favoritos as SimplePokemon[]} />)}
    </>
  )
}


export const NoFavorites = () =>
{
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center">
      <IoHeartOutline size={100} className="text-red-500" />
      <span>
        No hay Favoritos
      </span>
    </div>
  )
}