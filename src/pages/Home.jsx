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
        <div>Home</div>
    )
}
