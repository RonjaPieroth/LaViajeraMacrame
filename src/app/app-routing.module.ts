import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CourseOverviewComponent} from './course-overview/course-overview.component';
import {AboutComponent} from './about/about.component';
import {ImpressumComponent} from './impressum/impressum.component';
import {KontaktComponent} from './kontakt/kontakt.component';
import {DatenschutzerklaerungComponent} from './datenschutzerklaerung/datenschutzerklaerung.component';
import { CollectionComponent } from './collection/collection.component';


const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "courses", component: CourseOverviewComponent},
  {path: "about", component: AboutComponent},
  {path: "impressum", component: ImpressumComponent},
  {path: "contact", component: KontaktComponent},
  {path: "privacy-policy", component: DatenschutzerklaerungComponent},
  {path: "collection", component: CollectionComponent},
  {path: "**", redirectTo: "", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
