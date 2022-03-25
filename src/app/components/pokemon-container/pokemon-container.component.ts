import { PokemonService } from 'src/app/services/pokemon.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { filter } from 'rxjs/operators';
export interface Pokemon{
  name: string;
  url: string;
}
@Component({
  selector: 'app-pokemon-container',
  templateUrl: './pokemon-container.component.html',
  styleUrls: ['./pokemon-container.component.scss']
})
export class PokemonContainerComponent implements OnInit {
  @Input() pokemon!: Pokemon;
  @Output() detailPokemon: EventEmitter<string> = new EventEmitter();
  detalle!:any;
  url!: string;
  constructor(private pokemonService: PokemonService) { 

  }

  ngOnInit(): void {
    this.pokemonService.pokemonDetail.pipe(
      filter((detalles) => detalles.name=== this.pokemon.name)
    ).subscribe((detalle: any) => {
      console.log(detalle);
      this.detalle= detalle;
      this.url = detalle.sprites.front_default;
    })
  }

  detail(name: string) {
    this.detailPokemon.emit(name);
  }

}
