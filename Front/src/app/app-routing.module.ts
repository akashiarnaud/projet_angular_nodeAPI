import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { FirstComponent } from './first/first.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { PersonnageComponent } from './personnage/personnage.component';
import { InventaireComponent } from './inventaire/inventaire.component';
import { ConnexionComponent } from './connexion/connexion.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-employee' },
  { path: 'login', component: LoginComponent },
  { path: 'inscription', component : InscriptionComponent},
  { path: 'first', component : FirstComponent},
  { path: 'acceuil', component : AcceuilComponent},
  { path: 'personnage', component : PersonnageComponent},
  { path: 'inventaire', component : InventaireComponent},
  { path: 'connexion', component : ConnexionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
