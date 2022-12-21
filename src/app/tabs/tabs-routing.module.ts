import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('../pages/home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'tab2',
        loadChildren: () =>
          import('../tab2/tab2.module').then((m) => m.Tab2PageModule),
      },

      {
        path: 'profile',
        loadChildren: () =>
          import('../pages/profile/profile.module').then(
            (m) => m.ProfilePageModule
          ),
      },

      {
        path: 'historique',
        loadChildren: () =>
          import('../pages/historique/historique.module').then(
            (m) => m.HistoriquePageModule
          ),
      },
      {
        path: 'wishlist',
        loadChildren: () =>
          import('../pages/wishlist/wishlist.module').then(
            (m) => m.WishlistPageModule
          ),
      },
      {
        path: 'notification',
        loadChildren: () =>
          import('../pages/notification/notification.module').then(
            (m) => m.NotificationPageModule
          ),
      },
      {
        path: 'event',
        loadChildren: () =>
          import('../pages/event/event.module').then((m) => m.EventPageModule),
      },
      {
        path: 'form-guide',
        loadChildren: () =>
          import('../pages/form-guide/form-guide.module').then(
            (m) => m.FormGuidePageModule
          ),
      },
      

      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
