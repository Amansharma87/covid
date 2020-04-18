import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './nav-component/nav.component';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule} from '@angular/forms';
const approutes:Routes=[
  {path:'',
component:NavComponent,
  }
// },
// {path:'',
// component:loginComponent,
// }
];
@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(approutes),
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
