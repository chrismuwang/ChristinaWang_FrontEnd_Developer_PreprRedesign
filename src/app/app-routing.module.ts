import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExploreComponent } from './explore/explore.component';
import { MyWorkComponent } from './my-work/mywork.component';
import { ChallengeDetailsComponent } from './challenge-details/challenge-details.component';


const routes: Routes = [ {path: '', component: ExploreComponent},
                         {path: 'my-work', component: MyWorkComponent},
                         {path: 'challenge-details', component: ChallengeDetailsComponent} ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
