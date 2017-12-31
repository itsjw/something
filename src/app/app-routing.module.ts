import { RecordsComponent } from './components/records/records.component';
import { AnnualAccountComponent } from './components/annual-account/annual-account.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: RecordsComponent
    },
    {
        path: 'records',
        component: RecordsComponent
    },
    {
        path: 'annual-account',
        component: AnnualAccountComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
