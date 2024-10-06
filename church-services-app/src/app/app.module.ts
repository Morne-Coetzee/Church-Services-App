import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChurchServiceListComponent } from './church-service-list/church-service-list.component';
import { ChurchServiceCreateComponent } from './church-service-create/church-service-create.component';
import { ChurchServiceUpdateComponent } from './church-service-update/church-service-update.component';
import { ChurchServiceDeleteComponent } from './church-service-delete/church-service-delete.component';

@NgModule({
    declarations: [
        AppComponent,
        ChurchServiceListComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ChurchServiceCreateComponent,
        ChurchServiceUpdateComponent,
        ChurchServiceDeleteComponent
    ],
    providers: [
        provideHttpClient(withInterceptorsFromDi())
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }