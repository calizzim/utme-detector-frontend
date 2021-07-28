//reusable components
import { McalizziLoginComponent } from './reusable/components/mcalizzi-login/mcalizzi-login.component';
import { McalizziFormComponent } from './reusable/components/mcalizzi-form/mcalizzi-form.component';
import { McalizziPiechartComponent } from './reusable/components/mcalizzi-piechart/mcalizzi-piechart.component';
import { McalizziTableComponent } from './reusable/components/mcalizzi-table/mcalizzi-table.component';
import { McalizziSignupComponent } from './reusable/components/mcalizzi-signup/signup.component';
import { McalizziLinechartComponent } from './reusable/components/mcalizzi-linechart/mcalizzi-linechart.component';
import { McalizziCollapseComponent } from './reusable/components/mcalizzi-collapse/mcalizzi-collapse.component';
import { McalizziRangeComponent } from './reusable/components/mcalizzi-range/mcalizzi-range.component';
import { McalizziNavComponent } from './reusable/components/mcalizzi-nav/mcalizzi-nav.component';
import { McalizziNavbarComponent } from './reusable/components/mcalizzi-navbar/mcalizzi-navbar.component';
import { McalizziRangePieComponent } from './reusable/components/mcalizzi-range-pie/mcalizzi-range-pie.component';
import { McalizziHomeFeaturesComponent } from './reusable/components/mcalizzi-home-features/mcalizzi-home-features.component';
import { AdvancedWrapperComponent } from './reusable/components/mcalizzi-form/advanced-wrapper/advanced-wrapper.component';
import { McalizziNotFoundComponent } from './reusable/components/mcalizzi-not-found/mcalizzi-not-found.component';

//native components
import { HomeComponent } from './native/components/home/home.component';


//services
import { BackendRequestService } from './reusable/services/backend-request.service';

//directives
import { ApplyRefDirective } from './reusable/directives/apply-ref.directive';
import { SizeClassDirective } from './reusable/directives/size-class.directive';

//pipes
import { VarToStringPipe } from './reusable/pipes/var-to-string.pipe';
import { CurrencyLettersPipe } from './reusable/pipes/currency-letters.pipe';

//guards
import { AuthGuard } from './reusable/guards/auth.guard';
import { AppComponent } from './native/components/app/app.component';


//angular modules
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    McalizziSignupComponent,
    McalizziLoginComponent,
    McalizziTableComponent,
    McalizziLinechartComponent,
    McalizziPiechartComponent,
    McalizziFormComponent,
    McalizziRangeComponent,
    McalizziCollapseComponent,
    McalizziNavComponent,
    McalizziRangePieComponent,
    McalizziHomeFeaturesComponent,
    McalizziNavbarComponent,
    AdvancedWrapperComponent,
    VarToStringPipe,
    CurrencyLettersPipe,
    AppComponent,
    ApplyRefDirective,
    SizeClassDirective,
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
        path: 'signup', 
        component: McalizziSignupComponent, 
      },
      {
        path: 'login', 
        component: McalizziLoginComponent, 
      },
      {
        path: 'home', 
        component: HomeComponent, 
      },
      {
        path: '', 
        component: HomeComponent, 
      },
      {
        path: '**', 
        component: McalizziNotFoundComponent, 
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
