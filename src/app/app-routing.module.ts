import { GameListAuthComponent } from './components/game-list-auth/game-list-auth.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { AuthGuard } from './guard/auth.guard';
import { HomeLoggedComponent } from './components/home-logged/home-logged.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DetailsComponent } from './components/details/details.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

const routes: Routes = [

  { path: '', component: HomeComponent,
  children: [
    {path: '', component: GameListComponent},
    { path: "login", component: LoginComponent }, 
    { path: "gameDetails/:id", component: DetailsComponent},
  ],
},

  { path: 'home',
   component: HomeLoggedComponent,
    children: [
      { path: "", component: GameListAuthComponent},
      { path: "gameDetails/:id", component: DetailsComponent},
    ],
   canActivate: [AuthGuard]
  },
  
{ path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
