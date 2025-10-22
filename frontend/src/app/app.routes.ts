import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
  
  {
    // Ruta para la Carga de Pedido (Image 3)
    path: 'pedido/:id', 
    loadComponent: () => import('./pages/pedido/pedido.page').then(m => m.PedidoPage),
  },
  {
    path: 'pedido-en-curso/:id', 
    loadComponent: () => import('./pages/pedido-en-curso/pedido-en-curso.page').then(m => m.PedidoEnCursoPage),
  },
  {
    path: 'stock-admin', // Nueva ruta para el dueño/admin
    loadComponent: () => import('./pages/stock-admin/stock-admin.page').then(m => m.StockAdminPage),
  },
  {
    path: 'admin-dashboard',
    loadComponent: () => import('./pages/admin-dashboard/admin-dashboard.page').then( m => m.AdminDashboardPage)
  },
  {
    path: 'kitchen-dashboard',
    loadComponent: () => import('./pages/kitchen-dashboard/kitchen-dashboard.page').then( m => m.KitchenDashboardPage)
  }, 
  {
    // RUTA PRINCIPAL DEL MOZO: Ahora apunta al componente de Tabs
    path: 'mozo-app',
    loadComponent: () => import('./pages/mozo-tabs/mozo-tabs.page').then(m => m.MozoTabsPage),
    children: [
      {
        path: 'table-selection',
        loadComponent: () => import('./pages/table-selection/table-selection.page').then( m => m.TableSelectionPage)
      },
      // Aquí irían las rutas para las otras pestañas (Menú, Pedido, Cuenta)
      // Por ahora, solo Mesa es funcional
      {
        path: '',
        redirectTo: '/mozo-app/table-selection',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }