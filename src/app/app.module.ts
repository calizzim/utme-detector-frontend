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
import { LoadFormGuard } from './guards/load-form.guard';
import { VarToStringPipe } from './pipes/var-to-string.pipe';

@NgModule({
  declarations: [
    AppComponent,
    McalizziFormComponent,
    VarToStringPipe,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '', 
        component: SignupComponent, 
        canActivate: [LoadFormGuard],
        data: { templateName: 'user' }
      },
    ])
  ],
  providers: [
    BackendRequestService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
