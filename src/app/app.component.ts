import { Component } from '@angular/core';
import { POKEMONS } from './api-pokemon';
import { Pokemon } from './pokemon.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', 
  styles: []
})
export class AppComponent {
  pokemonList = POKEMONS;
  pokemonSelected: Pokemon | undefined;

  ngOnInit() {
    console.log(this.pokemonList);
  }

  selectPokemon(pokemonName: string): void {
    const name: string = pokemonName;
    const pokemon: Pokemon | undefined = this.pokemonList.find(pokemon => pokemon.name == name);
    this.pokemonSelected = pokemon;
  }
}
