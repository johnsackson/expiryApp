import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { FruitsComponent } from './modules/fruits/fruits.component';
import { GroceryComponent } from './modules/grocery/grocery.component';
import { VegitablesComponent } from './modules/vegitables/vegitables.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'vegitables', component: VegitablesComponent },
  { path: 'fruits', component: FruitsComponent },
  { path: 'groceries', component: GroceryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
