import { Routes } from '@angular/router';
import { PrincipalComponent } from './pages/principal/principal.component';
import { TiendaComponent } from './pages/tienda/tienda.component';

export const routes: Routes = [
    {
        path: 'principal', component: PrincipalComponent
    },
    {
        path: 'tienda', component: TiendaComponent
    },
    {
        path: '', redirectTo: '/principal', pathMatch: 'full'
    }
];
