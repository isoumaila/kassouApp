import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IndexPage } from './index.page';

const routes: Routes = [
    {
        path : '',
        component : IndexPage,

        children :[
            {
                path : '',
                loadChildren: () => import('../pages/welcome/welcome.module').then(m => m.WelcomePageModule)
            },
            {
                path : 'signup',
                loadChildren: () => import('../pages/signup/signup.module').then(m => m.SignupPageModule)
            },
            {
                path : 'login',
                loadChildren: () => import('../pages/login/login.module').then(m => m.LoginPageModule)
            },
            {
              path: 'about',
              loadChildren: () => import('../pages/about/about.module').then( m => m.AboutPageModule)
            }
        ]

    }
]


/*@NgModule({
    imports: [
      RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
  })*/
  @NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
  })
  export class IndexRouter { }