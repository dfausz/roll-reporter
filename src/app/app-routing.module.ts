import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameLogComponent } from './game-log/game-log.component';

const routes: Routes = [
  { path: "", component: GameLogComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
