import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { MainWindowComponent } from './components/main-window/main-window.component';

const routes: Routes = [
  { path: '', redirectTo: 'mainWindow', pathMatch: 'full' },
  { path: 'header', component: HeaderComponent },
  { path: 'mainWindow', component: MainWindowComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
