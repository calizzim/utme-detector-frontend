import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BudgetToolComponent } from './components/budget-tool/budget-tool.component';
import { HomeInfoComponent } from './components/home-info/home-info.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { McalizziFormComponent } from './custom-components/mcalizzi-form/mcalizzi-form.component';
import { McalizziPiechartComponent } from './custom-components/mcalizzi-piechart/mcalizzi-piechart.component';
import { McalizziTableComponent } from './custom-components/mcalizzi-table/mcalizzi-table.component';
import { SignupComponent } from './components/signup/signup.component';
import { McalizziLinechartComponent } from './custom-components/mcalizzi-linechart/mcalizzi-linechart.component';
import { AuthGuard } from './guards/auth.guard';
import { VarToStringPipe } from './pipes/var-to-string.pipe';
import { BackendRequestService } from './services/backend-request.service';
import { CurrencyLettersPipe } from './pipes/currency-letters.pipe';
import { TestComponent } from './components/test/test.component';
import { McalizziCollapseComponent } from './custom-components/mcalizzi-collapse/mcalizzi-collapse.component';
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
    HomeInfoComponent,
    CurrencyLettersPipe,
    TestComponent,
    McalizziCollapseComponent
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
        path: 'test', 
        component: TestComponent
      },
      {
        path: '', 
        component: HomeComponent, 
      },
    ])
  ],
  providers: [
    BackendRequestService,
    CurrencyLettersPipe
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
