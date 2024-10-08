import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NbThemeModule, NbLayoutModule, NbCardModule, NbActionsModule, NbIconModule, NbButtonModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChurchServiceListComponent } from './components/church-service-list/church-service-list.component';
import { ChurchServiceFormComponent } from './components/church-service-form/church-service-form.component';
import { ChurchServiceDetailComponent } from './components/church-service-detail/church-service-detail.component';
import { ChurchServiceCreateComponent } from './components/church-service-create/church-service-create.component';

@NgModule({
  declarations: [
    AppComponent,
    ChurchServiceListComponent,
    ChurchServiceFormComponent,
    ChurchServiceDetailComponent,
    ChurchServiceCreateComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NbThemeModule.forRoot({ name: 'corporate' }),
    NbLayoutModule,
    NbCardModule,
    NbActionsModule,
    NbIconModule,
    NbButtonModule,
    NbEvaIconsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }