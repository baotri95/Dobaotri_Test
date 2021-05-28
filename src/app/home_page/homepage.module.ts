import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './homepage.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    { path: '', component: HomePageComponent },
];
@NgModule({
    declarations: [
        HomePageComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ],
    providers: [],
    bootstrap: []
})
export class HomePageModule { }
