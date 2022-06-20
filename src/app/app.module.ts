import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { PositionsComponent } from './components/positions/positions.component';
import { PositionEditComponent } from './components/position-edit/position-edit.component';


const appRoutes: Routes = [
  {path:'', component:UsersComponent},
  {path: 'edit/:id', component:UserEditComponent},
  {path:'positions', component:PositionsComponent},
  {path: 'positions/edit/:id', component:PositionEditComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    NavbarComponent,
    UserEditComponent,
    PositionsComponent,
    PositionEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
