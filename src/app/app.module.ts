import { McalizziPiechartComponent } from './components/mcalizzi-piechart/mcalizzi-piechart.component';
import { SignupComponent } from './components/signup/signup.component';
import { BackendRequestService } from './services/backend-request.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { McalizziFormComponent } from './components/mcalizzi-form/mcalizzi-form.component';
import { VarToStringPipe } from './pipes/var-to-string.pipe';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { BudgetToolComponent } from './components/budget-tool/budget-tool.component';
import { AuthGuard } from './guards/auth.guard';
import { McalizziTableComponent } from './components/mcalizzi-table/mcalizzi-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { McalizziLinechartComponent } from './components/mcalizzi-linechart/mcalizzi-linechart.component';
import { HomeInfoComponent } from './components/home-info/home-info.component'

@NgModule({
  declarations: [
    AppComponent,
    McalizziFormComponent,
    VarToStringPipe,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    BudgetToolComponent,
    McalizziTableComponent,
    McalizziLinechartComponent,
    McalizziPiechartComponent,
    HomeInfoComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'signup', 
        component: SignupComponent, 
      },
      {
        path: 'login', 
        component: LoginComponent, 
      },
      {
        path: 'budgetTool', 
        component: BudgetToolComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'homeInfo', 
        component: HomeInfoComponent,
        canActivate: [AuthGuard],
      },
      {
        path: '', 
        component: HomeComponent, 
      },
    ])
  ],
  providers: [
    BackendRequestService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
