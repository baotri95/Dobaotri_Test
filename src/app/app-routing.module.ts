import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from 'src/app/core/layout/layout.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '', children: [
      { path: 'home', loadChildren: () => import('./home_page/homepage.module').then(m => m.HomePageModule) },
      { path: 'pokemon-list', loadChildren: () => import('./pokemons_item/pokemon.item.module').then(m => m.PokemonItemModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
