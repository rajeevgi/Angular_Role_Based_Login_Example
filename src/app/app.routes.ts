import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { UserComponent } from './pages/user/user.component';
import { ClientComponent } from './pages/client/client.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
  // Default route
  {
    path: '',
    redirectTo: 'app-login',
    pathMatch: 'full',
  },

  {
    path: 'app-login',
    component: LoginComponent,
  },

  {
    path: 'app-layout',
    component:LayoutComponent
  },

  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'app-home',
        component: HomeComponent,
      },

      {
        path: 'app-about',
        component: AboutComponent,
      },

      {
        path: 'app-user',
        component: UserComponent,
      },

      {
        path: 'app-client',
        component: ClientComponent,
      },

      {
        path: 'app-dashboard',
        component: DashboardComponent,
      },
    ],
  },
];
