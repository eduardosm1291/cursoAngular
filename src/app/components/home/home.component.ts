import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pokemonesArray: any [] = [];
  constructor(
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
   console.log('hello');
  }

  getDetail(name: string) {
    this.pokemonService.detailPokemon(name);

  }

}
