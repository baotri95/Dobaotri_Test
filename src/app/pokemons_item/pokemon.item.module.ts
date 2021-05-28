import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PokemonItemComponent } from './pokemon.item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationComponent } from 'src/app/core/pagination/pagination.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


const routes: Routes = [
    { path: '', component: PokemonItemComponent },
];
@NgModule({
    declarations: [
        PokemonItemComponent,
        PaginationComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        FormsModule,
        Ng2SearchPipeModule
    ],
    providers: [],
    bootstrap: []
})
export class PokemonItemModule { }
