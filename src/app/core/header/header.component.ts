import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from 'src/services/pokemon.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  version: any;
  generation: any;
  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.navigatorVersion$.subscribe((state) => {
      this.version = state.version.results;
      this.generation  = state.generation.results;
    });
  }

}
