import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './native/components/app/app.component';
import { BudgetToolComponent } from './native/components/budget-tool/budget-tool.component';
import { HomeInfoComponent } from './native/components/home-info/home-info.component';
import { HomeComponent } from './native/components/home/home.component';
import { McalizziLoginComponent } from './reusable/components/mcalizzi-login/mcalizzi-login.component';
import { McalizziFormComponent } from './reusable/components/mcalizzi-form/mcalizzi-form.component';
import { McalizziPiechartComponent } from './reusable/components/mcalizzi-piechart/mcalizzi-piechart.component';
import { McalizziTableComponent } from './reusable/components/mcalizzi-table/mcalizzi-table.component';
import { McalizziSignupComponent } from './reusable/components/mcalizzi-signup/signup.component';
import { McalizziLinechartComponent } from './reusable/components/mcalizzi-linechart/mcalizzi-linechart.component';
import { AuthGuard } from './reusable/guards/auth.guard';
import { VarToStringPipe } from './reusable/pipes/var-to-string.pipe';
import { BackendRequestService } from './reusable/services/backend-request.service';
import { CurrencyLettersPipe } from './reusable/pipes/currency-letters.pipe';
import { TestComponent } from './native/components/test/test.component';
import { McalizziCollapseComponent } from './reusable/components/mcalizzi-collapse/mcalizzi-collapse.component';
import { AdvancedWrapperComponent } from './reusable/components/mcalizzi-form/advanced-wrapper/advanced-wrapper.component';
import { McalizziRangeComponent } from './reusable/components/mcalizzi-range/mcalizzi-range.component';
import { CarInfoComponent } from './native/components/car-info/car-info.component';
import { OtherInfoComponent } from './native/components/other-info/other-info.component';
import { SavingsInfoComponent } from './native/components/savings-info/savings-info.component';
import { McalizziNavComponent } from './reusable/components/mcalizzi-nav/mcalizzi-nav.component';
import { ApplyRefDirective } from './reusable/directives/apply-ref.directive';
import { McalizziNavbarComponent } from './reusable/components/mcalizzi-navbar/mcalizzi-navbar.component';
import { SummaryComponent } from './native/components/summary/summary.component';
import { McalizziRangePieComponent } from './reusable/components/mcalizzi-range-pie/mcalizzi-range-pie.component';
import { SizeClassDirective } from './reusable/directives/size-class.directive';
import { McalizziHomeFeaturesComponent } from './reusable/components/mcalizzi-home-features/mcalizzi-home-features.component';

@NgModule({
  declarations: [
    AppComponent,
    McalizziFormComponent,
    VarToStringPipe,
    McalizziSignupComponent,
    McalizziLoginComponent,
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
    SummaryComponent,
    McalizziRangePieComponent,
    SizeClassDirective,
    McalizziHomeFeaturesComponent
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
        component: McalizziSignupComponent, 
      },
      {
        path: 'login', 
        component: McalizziLoginComponent, 
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
