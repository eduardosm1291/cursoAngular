import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  url = environment.pokemonUrl;
  pokemonDetail = new BehaviorSubject<any>({});
  constructor(
    private httpClient: HttpClient,
  ) { }

  pokemones() {
    return this.httpClient.get(this.url + '/pokemon');
  }

  detailPokemon(name: string) {
    return this.httpClient.get(this.url +'/pokemon/' + name).subscribe((detail) =>{
      this.pokemonDetail.next(detail);
    });
  }
}
