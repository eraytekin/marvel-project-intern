import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminScreenComponent } from './admin-screen/admin-screen.component';
import { BuyScreenComponent } from './buy-screen/buy-screen.component';
import { LogandregComponent } from './logandreg/logandreg.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserScreenComponent } from './user-screen/user-screen.component';

const routes: Routes = [
  {path:'login', component:LogandregComponent},
  {path:'register', component:LogandregComponent},
  {path:'',redirectTo:'login', pathMatch:'full'},
  {path:'admin',component:AdminScreenComponent},
  {path:'buy',component:BuyScreenComponent},
  {path:'user', component:UserScreenComponent},
  {path:"**",pathMatch:'full', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
