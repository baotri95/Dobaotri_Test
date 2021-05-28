import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, forkJoin, Observable, of, race, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  api = 'https://pokeapi.co/api/v2/';
  navigatorVersion$ = new Subject<any>();
  constructor(private http: HttpClient) {
    this.getVersionAndGen().subscribe((data: any) => {
      this.navigatorVersion$.next(data);
      console.log(data);
    });
  }


  getPokemon(limit: number, offset: number): Observable<any> {
    return this.http.get<any>(this.api + `pokemon?limit=${limit}&offset=${offset}`);
  }
  getPokemonByName(name: string): Observable<any> {
    return this.http.get<any>(this.api + `pokemon/${name}`);
  }
  getVersionAndGen(): Observable<any> {
    const version = this.http.get<any>(this.api + `version`);
    const generation = this.http.get<any>(this.api + `generation`);
    return forkJoin(
      {
        version,
        generation
      }
    );
  }
  getItem(limit: number, offset: number): Observable<any> {
    return this.http.get<any>(this.api + `item?limit=${limit}&offset=${offset}`);
  }
}
