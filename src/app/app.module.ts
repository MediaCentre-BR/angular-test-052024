import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list-component';
import { DataService } from './services/data/data.service';
import { HttpClientModule } from '@angular/common/http'; // Necessário para serviços HTTP

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    // outros componentes
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Importando o módulo HTTP
    // outros módulos
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
