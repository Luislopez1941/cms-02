import { Routes } from '@angular/router';
import { RootPageComponent } from './pages/root-page/root-page.component';

export const routes: Routes = [
    {
        path: '',
        component: RootPageComponent,
        canActivate: [],
        children: [
            {
                path: 'customers',
                title: 'customers',
                loadComponent: () => import('./components/sidebar/customers/customers.component'),
            },
            {
                path: 'administrator',
                title: 'administrator',
                loadComponent: () => import('./components/sidebar/administrator/administrator.component'),
            },
            // {
            //     path: 'users/create',
            //     title: 'create users',
            //     loadComponent: () => import('./components/sidebar/users/create-user/create-user.component'),
            // },
            // {
            //     path: 'administrators',
            //     title: 'Administrators',
            //     loadComponent: () => import('./components/sidebar/administrators/administrators.component')
            // },
            // {
            //     path: 'customers',
            //     title: 'Customers',
            //     loadComponent: () => import('./components/sidebar/customers/customers.component')
            // },

            // {
            //     path: 'categories',
            //     title: 'create users',
            //     loadComponent: () => import('./components/sidebar/categories/categories.component'),
            // },
            // {
            //     path: 'categories/create',
            //     title: 'create users',
            //     loadComponent: () => import('./components/sidebar/categories/create/create.component'),
            // },
        ]
    },
    {
        path: 'login', // Ruta para el componente de inicio de sesión
        loadComponent: () => import('./pages/login/login.component'), // Asigna el componente de inicio de sesión a la ruta 'login'
    },
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    }
];
