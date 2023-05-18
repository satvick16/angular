import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatorComponent } from './creator/creator.component';
import { SearchDeleteComponent } from './search-delete/search-delete.component';

const routes: Routes = [
  {path:"", redirectTo:"greeting", pathMatch:"full"},
  {path:"greeting", component:CreatorComponent},
  {path:"search", component:SearchDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
