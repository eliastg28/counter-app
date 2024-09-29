import { BaseService } from "../BaseService";

const UrlBase = 'https://pokeapi.co/api/v2';

export class PokemonService extends BaseService {
    async getPokemonData(pokemonName) {
        return this.getData(`${UrlBase}/pokemon/${pokemonName}`);
    }
}
