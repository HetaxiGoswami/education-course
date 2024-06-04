import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { PopularCourseComponent } from './popular-course/popular-course.component';
import { CourseCardsComponent } from './course-cards/course-cards.component';
import { LifeCoachComponent } from './life-coach/life-coach.component';
import { LedaerExecutionComponent } from './ledaer-execution/ledaer-execution.component';
import { BasicStructureComponent } from './basic-structure/basic-structure.component';
import { FlexibleDistanceComponent } from './flexible-distance/flexible-distance.component';



@NgModule({
  declarations: [
    IntroComponent,
    PopularCourseComponent,
    CourseCardsComponent,
    LifeCoachComponent,
    LedaerExecutionComponent,
    BasicStructureComponent,
    FlexibleDistanceComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
  ],

})
export class AllComponentsModule { }
