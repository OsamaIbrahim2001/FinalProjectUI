import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Component/home-page/home-page.component';

const routes: Routes = [
  {path : '' , redirectTo:'/homepage', pathMatch:'full'},
  { path:'employee', loadChildren:()=>import('src/app/employee/employee.module').then((m)=>m.EmployeeModule)},
  { path:'user', loadChildren:()=>import('src/app/user/user.module').then((m)=>m.UserModule)},
  { path:'unit', loadChildren:()=>import('src/app/unit/unit.module').then((m)=>m.UnitModule)},
  { path:'offer', loadChildren:()=>import('src/app/offers/offers.module').then((m)=>m.OffersModule)},
  { path:'chat', loadChildren:()=>import('src/app/chat/chat.module').then((m)=>m.ChatModule)},
  {path : '**' , component : HomePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
