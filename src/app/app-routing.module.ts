import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExploreComponent } from './explore/explore.component';
import { ProjectsComponent } from './projects/projects.component';


const routes: Routes = [ {path: '', component: ExploreComponent},
                         {path: 'projects', component: ProjectsComponent} ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
