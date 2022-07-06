import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { PropertyListComponent } from './components/property-list/property-list.component';
import { PropertyDetailComponent } from './components/property-detail/property-detail.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  { 
    path: 'login', 
    component: LoginComponent 
  },
  { 
    path: 'properties', 
    component: PropertyListComponent,
    canActivate:[AuthGuard] 
  },
  { 
    path: 'properties/:slurp', 
    component: PropertyDetailComponent, 
    canActivate:[AuthGuard]
  },
  { path: '**', redirectTo: '/login' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
