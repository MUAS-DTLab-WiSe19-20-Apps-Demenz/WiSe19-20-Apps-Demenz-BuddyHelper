import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent}
 // {path: 'main', component: MainComponent} 
// Wenn der Component für die Main Seite ist verfügbar
// 'main' und MainComponent mit dem Component Name ändern
// auch in login.component.ts 'main' mit Component name ersetzen
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


