import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { RegistrationComponent } from './components/registration/registration.component';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { CanvasComponent } from './components/canvas/canvas.component';
import { TableComponent } from './components/table/table.component';
import { CoordinatesComponent } from './components/coordinates/coordinates.component';
import {RouterModule, Routes} from '@angular/router';
import {RadioButtonModule} from 'primeng/radiobutton';
import {FormsModule} from '@angular/forms';
import {SliderModule} from 'primeng/slider';

const appRoutes: Routes = [
  { path: 'welcome', component: WelcomeComponent},
  { path: '', component: WelcomeComponent},
  { path: 'mainpage', component: MainpageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    RegistrationComponent,
    MainpageComponent,
    CanvasComponent,
    TableComponent,
    CoordinatesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    ButtonModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    RadioButtonModule,
    SliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
