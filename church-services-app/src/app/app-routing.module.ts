import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChurchServiceListComponent } from './church-service-list/church-service-list.component';
import { ChurchServiceCreateComponent } from './church-service-create/church-service-create.component';
import { ChurchServiceUpdateComponent } from './church-service-update/church-service-update.component';
import { ChurchServiceDeleteComponent } from './church-service-delete/church-service-delete.component';

const routes: Routes = [
    { path: '', redirectTo: '/services', pathMatch: 'full' },
    { path: 'services', component: ChurchServiceListComponent },
    { path: 'create', component: ChurchServiceCreateComponent },
    { path: 'update', component: ChurchServiceUpdateComponent },
    { path: 'delete', component: ChurchServiceDeleteComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }