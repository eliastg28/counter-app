import { useEffect, useState } from "react"; 
import { PokemonService } from '../services/Pokemon/PokemonService.jsx';

export const DataApp = () => {
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);
    const [pokemonName, setPokemonName] = useState('');

    const fetchPokemon = async (name) => {
        const pokemonService = new PokemonService();
        setLoading(true);
        try {
            const pokemonData = await pokemonService.getPokemonData(name);
            setPokemon(pokemonData);
        } catch (error) {
            console.error("Error fetching Pokémon data:", error);
            setPokemon(null);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchPokemon(pokemonName.toLowerCase());
    };

    useEffect(() => {
        fetchPokemon('ditto');
    }, []);

    if (loading) {
        return <h1>Cargando...</h1>;
    }

    if (!pokemon) {
        return <h1>No se encontró información del Pokémon.</h1>;
    }

    return (
        <div className="container text-center mt-5">
            <h1>{pokemon.name.toUpperCase()}</h1>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} width={300} height={300} className="mb-3"/>
            <h2>Tipos:</h2>
            <ul className="list-group mb-3">
                {pokemon.types.map(type => (
                    <li key={type.type.name} className="list-group-item">{type.type.name}</li>
                ))}
            </ul>
            <h2>Estadísticas:</h2>
            <ul className="list-group mb-4">
                {pokemon.stats.map(stat => (
                    <li key={stat.stat.name} className="list-group-item">
                        {stat.stat.name}: {stat.base_stat}
                    </li>
                ))}
            </ul>
            
            <form onSubmit={handleSubmit} className="form-inline justify-content-center mb-4">
                <input 
                    type="text" 
                    value={pokemonName} 
                    onChange={(e) => setPokemonName(e.target.value)} 
                    placeholder="Ingresa el nombre del Pokémon" 
                    className="form-control mr-2"
                />
                <br />
                <button type="submit" className="btn btn-primary">Buscar Pokémon</button>
            </form>
        </div>
    );
};

export default DataApp;
