import { Card } from "../componentes/Card"
import { useEffect, useState } from "react"

export const Home = () => {

    const [pokemons, setPokemons] = useState([])

    const fetchPokemons = async() => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`)
        const data = await response.json()
        console.log(data.results.slice(0,10))
        setPokemons(data.results.slice(0,10))
    }

    useEffect(() => {
        fetchPokemons()
    }, [])

    return (
        <>
        <h1>Pokemons: </h1>
        <hr />

        {pokemons.map(pokemon => (
            <Card
                key={pokemon.name}
                nombre={pokemon.name}
                url={pokemon.url}
            >

            </Card>
        ))}
        </>
    )
}
