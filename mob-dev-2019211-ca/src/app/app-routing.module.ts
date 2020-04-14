import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

    { path: '', loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule) },
  {
    path: 'quote-details',
    loadChildren: () => import('./pages/quote-details/quote-details.module').then( m => m.QuoteDetailsPageModule)
  },
  {
    path: 'deaths',
    loadChildren: () => import('./pages/deaths/deaths.module').then( m => m.DeathsPageModule)
  }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
