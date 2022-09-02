import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemonApiUrl: string = "https://pokeapi.co/api/v2/pokemon/"


  constructor(private http: HttpClient) { }

  quemEhEssePokemon(pokemon: string) {

    console.log(this.pokemonApiUrl + pokemon);
    return this.http.get<any>(this.pokemonApiUrl + pokemon)

  }
}
