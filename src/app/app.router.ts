//STEP 1 //Import ModuleWithProviders Routes, RouterModule
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Step 2 //Import the components that will be linked to a route
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';

//Step 3 Setup the Routes
export const router: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'cart', component: CartComponent }
];

//Step 4 - Tell angular to use this router
export const routes: ModuleWithProviders = RouterModule.forRoot(router);
