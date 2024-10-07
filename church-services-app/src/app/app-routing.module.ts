import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChurchServiceListComponent } from './components/church-service-list/church-service-list.component';
import { ChurchServiceFormComponent } from './components/church-service-form/church-service-form.component';
import { ChurchServiceDetailComponent } from './components/church-service-detail/church-service-detail.component';

const routes: Routes = [
    { path: '', redirectTo: '/services', pathMatch: 'full' },
    { path: 'services', component: ChurchServiceListComponent },
    { path: 'services/create', component: ChurchServiceFormComponent },
    { path: 'services/:id', component: ChurchServiceDetailComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }