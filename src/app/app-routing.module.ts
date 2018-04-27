import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NoDataComponent } from './no-data/no-data.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
/*      {
        path: '',
        pathMatch: 'full',
        component: AppComponent
      },*/
      {
        path: '**',
        redirectTo: '/404'
      },
      {
        path: '404',
        component: NoDataComponent
      }
    ], {
      useHash: true,
      enableTracing: true
    })
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
