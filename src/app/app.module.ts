import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { AdvancedWrapperComponent } from './custom-components/mcalizzi-form/advanced-wrapper/advanced-wrapper.component';
import { McalizziRangeComponent } from './custom-components/mcalizzi-range/mcalizzi-range.component';
import { CarInfoComponent } from './components/car-info/car-info.component';
import { OtherInfoComponent } from './components/other-info/other-info.component';
import { SavingsInfoComponent } from './components/savings-info/savings-info.component';
import { McalizziNavComponent } from './custom-components/mcalizzi-nav/mcalizzi-nav.component';
import { ApplyRefDirective } from './directives/apply-ref.directive';
import { McalizziNavbarComponent } from './custom-components/mcalizzi-navbar/mcalizzi-navbar.component';
import { PropogateDirective } from './directives/propogate.directive';
import { SummaryComponent } from './components/summary/summary.component';
import { McalizziRangePieComponent } from './custom-components/mcalizzi-range-pie/mcalizzi-range-pie.component';
import { SizeClassDirective } from './directives/size-class.directive';
import { HomeFeaturesComponent } from './custom-components/home-features/home-features.component';
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
    McalizziCollapseComponent,
    AdvancedWrapperComponent,
    McalizziRangeComponent,
    CarInfoComponent,
    OtherInfoComponent,
    SavingsInfoComponent,
    McalizziNavComponent,
    ApplyRefDirective,
    McalizziNavbarComponent,
    PropogateDirective,
    SummaryComponent,
    McalizziRangePieComponent,
    SizeClassDirective,
    HomeFeaturesComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'budgetTool', 
        component: BudgetToolComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'signup', 
        component: SignupComponent, 
      },
      {
        path: 'login', 
        component: LoginComponent, 
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
