import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
    {
        path: 'home',
        
        component: HomePage,
        

        children: [
            {
                path: 'feed',
                loadChildren: () => import('../pages/feed/feed.module').then(m => m.FeedPageModule)
            },
            {
                path: 'notification',
                loadChildren: () => import('../pages/notification/notification.module').then(m => m.NotificationPageModule)
            },
            {
                path: 'messages',
                loadChildren: () => import('../pages/messages/messages.module').then(m => m.MessagesPageModule)
            },

            {
                path: 'settings',
                loadChildren: () => import('../pages/settings/settings.module').then(m => m.SettingsPageModule)
            },

            {
                path: 'recipes',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('../recipes/recipes.module').then(m => m.RecipesPageModule)
                    },
                    {
                        path: ':recipeId',
                        loadChildren: () => import('../recipes/recipe-detail/recipe-detail.module').then(m => m.RecipeDetailPageModule)
                    }
                ]

            }
        ]

    }
]


@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
/*@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})*/
export class HomeRouter { }