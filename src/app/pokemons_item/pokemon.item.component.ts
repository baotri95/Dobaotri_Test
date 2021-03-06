import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/services/pokemon.service';
@Component({
    selector: 'app-pokemonitem',
    templateUrl: './pokemon.item.component.html',
    styleUrls: ['./pokemon.item.component.scss']
})
export class PokemonItemComponent implements OnInit {
    pokemons: any[];
    searchParams = '';
    searchResult: any[] = [];
    page = 1;
    perPage: number;
    total: number;
    totalPages: number;
    pageChange = 0;
    pokemonDetail: any;
    selectPage = 20;
    limitPage = 20;
    constructor(private pokemonService: PokemonService) {

    }
    ngOnInit(): void {
        this.pokemonService.getPokemon(2500, 0).subscribe((re) => {
            const results = re.results;
            this.pokemons = results.map((p) => ({
                name: p.name,
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
                    + p.url.split('/')[p.url.split('/').length - 2] + '.png',
                detail: p.url
            }));

            this.searchResult = results.map((p) => ({
                name: p.name,
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
                    + p.url.split('/')[p.url.split('/').length - 2] + '.png',
                detail: p.url
            }));
        });
    }
    changeSearchParams(event): void {
        this.pageChange = 0;
        this.page = 1;
    }
    selectPokemon(numberPage): void {
        // use state
        this.selectPage = numberPage;
        this.limitPage = numberPage;
        this.pageChange = 0;
        this.page = 1;
        this.mudouPagina({ valor: 1, pageChange: (this.page * this.limitPage) - this.limitPage });
    }
    mudouPagina(event): any {
        this.pageChange = event.pageChange ? event.pageChange : 0;
        if (event.valor > 1) {
            this.page = event.valor;
            if (event.pageChange === undefined) {
                this.pageChange = this.pageChange + this.limitPage;
            }
            if (event.valor === this.totalPages) {
                this.page = event.valor;
                this.pageChange = ((this.page * this.limitPage) - this.limitPage); // max
            }
        } else {
            if (event.pageChange === undefined) {
                this.pageChange = this.pageChange - this.limitPage;
            }
            console.log(this.pageChange);
            if (event.valor === 1) {
                this.page = 1;
                this.pageChange = 0;
            }
        }


    }
    renderDetail(name): void {
        this.pokemonService.getPokemonByName(name).subscribe(data => {
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
