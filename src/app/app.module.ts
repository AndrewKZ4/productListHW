import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from "@angular/router";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServcompComponent } from './servcomp/servcomp.component';
import {FormsModule} from "@angular/forms";
import { NavigationComponent } from './layout/navigation/navigation.component';
import { MenuComponent } from './layout/menu/menu.component';
import { ProductslistComponent } from './productslist/productslist.component';
import { ProductComponent } from './productslist/product/product.component';
import { AddproductComponent } from './productslist/addproduct/addproduct.component';
import {FooterComponent} from "./layout/footer/footer.component";

const appRoutes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'about', component:AboutComponent},
  {path: 'products', component:ProductslistComponent},
  {path: 'services', component:ServcompComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServcompComponent,
    NavigationComponent,
    FooterComponent,
    MenuComponent,
    ProductslistComponent,
    ProductComponent,
    AddproductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
