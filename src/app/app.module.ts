import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { CourseOverviewComponent } from './course-overview/course-overview.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { ParticipantsListComponent } from './participants-list/participants-list.component';
import { FooterComponent } from './footer/footer.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { DatenschutzerklaerungComponent } from './datenschutzerklaerung/datenschutzerklaerung.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { CollectionComponent } from './collection/collection.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    CourseOverviewComponent,
    SignUpFormComponent,
    HomeComponent,
    CourseComponent,
    ParticipantsListComponent,
    FooterComponent,
    ImpressumComponent,
    DatenschutzerklaerungComponent,
    KontaktComponent,
    CollectionComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
