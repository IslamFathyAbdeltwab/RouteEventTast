import { Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [

    {path:"",redirectTo:'home', pathMatch:'full',title:"Home"},
    {path:"home",component:HomeComponent,title:"Home"},
    {path:"product/:id",component:ProductDetailsComponent,title:"product"},

];