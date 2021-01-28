import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { ConstructorComponent } from './components/constructor/constructor.component';
import { OrderComponent } from './components/order/order.component';
import { DeliveryComponent } from './components/delivery/delivery.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AboutComponent } from './components/about/about.component';
import { OrderCompleteComponent } from './components/order-complete/order-complete.component';

const appRoutes: Routes = [
  {path:'', component:MainComponent},
  {path:'constructor', component:ConstructorComponent},
  {path:'delivery', component:DeliveryComponent},
  {path:'contacts', component:ContactsComponent},
  {path:'order', component:OrderComponent},
  {path:'about', component:AboutComponent},
  {path:'order-complete', component:OrderCompleteComponent},
  {path:'**', component:NotFoundComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ConstructorComponent,
    OrderComponent,
    DeliveryComponent,
    ContactsComponent,
    NotFoundComponent,
    AboutComponent,
    OrderCompleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
