import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/services/pokemon.service';
@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.scss']
})
export class HomePageComponent implements OnInit {
    title = 'dobaotri-test';
    pokemons: any[] = [];
    items: any[] = [];
    pokemonDetail: any;
    constructor(private pokemonService: PokemonService) {
    }
    ngOnInit(): void {
        this.pokemonService.getPokemon(10, 10).subscribe((re) => {
            const results = re.results;
            this.pokemons = results.map((p) => ({
                name: p.name,
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/'
                    + p.url.split('/')[p.url.split('/').length - 2] + '.png',
                detail: p.url
            }));
        });
        this.pokemonService.getItem(10, 10).subscribe((re) => {
            const results = re.results;
            this.items = results.map((p) => ({
                name: p.name,
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/'
                    + p.name + '.png',
                detail: p.url
            }));
        });
    }
    renderDetail(name): void {
        this.pokemonService.getPokemonByName(name).subscribe(data => {
            console.log('=>>>', data);
            this.pokemonDetail = data;
        });
    }

    imageSprites(data): any {
        if (data) {
            const url = Object.values(data).filter(s => s !== null && typeof s === 'string');
            const gender = Object.keys(data);
            const values = gender.map((k, i) => {
                if (url[i] !== undefined) {
                    return { url: url[i], gender: k };
                }
                return;
            });
            console.log(values);
            return values.filter(s => s !== undefined);
        }
    }

}

