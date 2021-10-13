import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import PokemonItem from '../PokemonItem'

const PokemonContainer = () => {

    const [pokemons, setPokemons] = useState(null)

    const getPokemons = async () => {
        try {
            const respuesta = await axios.get("https://pokeapi.co/api/v2/pokemon")
            setPokemons(respuesta.data.results)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPokemons()
    }, [])

    return (
        <div>
            <div className="row">
                {pokemons && pokemons.map((pokemon) => (
                    <h1>{pokemon.name}</h1>
                ))}
            </div>
        </div>
    )
}

export default PokemonContainer
