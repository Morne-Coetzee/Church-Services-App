import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChurchServiceListComponent } from './components/church-service-list/church-service-list.component';
import { HttpClientModule } from '@angular/common/http';
import { NbThemeModule, NbLayoutModule, NbCardModule, NbButtonModule, NbIconModule, NbActionsModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Import standalone components
import { ChurchServiceFormComponent } from './components/church-service-form/church-service-form.component';
import { ChurchServiceDetailComponent } from './components/church-service-detail/church-service-detail.component';

@NgModule({
    declarations: [
        AppComponent,
        ChurchServiceListComponent,
        ChurchServiceFormComponent,
        ChurchServiceDetailComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        NbThemeModule.forRoot({ name: 'corporate' }),
        NbLayoutModule,
        NbCardModule,
        NbButtonModule,
        NbIconModule,
        NbEvaIconsModule,
        NbActionsModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }