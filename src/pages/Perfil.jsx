import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Perfil = () => {

    const { id } = useParams();
    console.log(id)
    const [pokemonDetails, setPokemonDetails] = useState([]);

    const fetchPokemonDetails = async () => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await response.json()
        console.log(data)
        setPokemonDetails(data)
    };

    useEffect(() => {  
        fetchPokemonDetails();
    }, [id]);

    return (
        <div className='container'>
            <h1>Perfil de {pokemonDetails.name}</h1>
            <img src={pokemonDetails.sprites?.front_default} alt={pokemonDetails.name} />
            <h2>Nombre: {pokemonDetails.name}</h2>
            <h2>Número: {pokemonDetails.order}</h2>
            <h2>Peso: {pokemonDetails.weight}</h2>
        </div>
    )
}
