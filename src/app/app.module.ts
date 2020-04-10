import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExploreComponent } from './explore/explore.component';
import { ProjectsComponent } from './projects/projects.component';
import { LabsComponent } from './labs/labs.component';
import { ChallengesComponent } from './challenges/challenges.component';
import { ChallengeDetailsComponent } from './challenges/challenge-details/challenge-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ExploreComponent,
    ProjectsComponent,
    LabsComponent,
    ChallengesComponent,
    ChallengeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
