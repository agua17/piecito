import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { PrincipalComponent } from './pages/principal/principal.component';
import { TiendaComponent } from './pages/tienda/tienda.component';
import { MujerComponent } from './pages/mujer/mujer.component';
import { HombreComponent } from './pages/hombre/hombre.component';
import { PequesComponent } from './pages/peques/peques.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

export const routes: Routes = [
    {
        path: 'principal', component: PrincipalComponent
    },
    {
        path: 'tienda', component: TiendaComponent
    },
    {
        path: 'tienda/mujer',
        component: MujerComponent,
    },
    {
        path: 'tienda/hombre',
        component: HombreComponent,
    },

    {
        path: 'tienda/peques',
        component: PequesComponent,
    },
    {
        path: 'registro',
        component: RegistroComponent,
    },

    {
        path: 'blog',
        component: BlogComponent,
    },

    {
        path: 'contacto',
        component: ContactoComponent,
    },

    {
        path: '', redirectTo: '/principal', pathMatch: 'full'
    }
];
