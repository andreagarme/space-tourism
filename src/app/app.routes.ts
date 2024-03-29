import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'destinations/:planet',
    loadComponent: async () => {
      const { DestinationsComponent } = await import(
        './pages/destinations/destinations.component'
      );
      return DestinationsComponent;
    },
  },
];
