import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MontagnaComponent } from './montagna/montagna.component';
import { MareComponent } from './mare/mare.component';

const routes: Routes = [
  {path:'montagna', component: MontagnaComponent},
  {path:'mare', component: MareComponent},
  {path: '', redirectTo: '/montagna', pathMatch: 'full'},  //l'applicazione parte di default dalla route montagna
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
