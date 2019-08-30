import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2Rut } from 'ng2-rut';
import {AuthGuard} from './shared/auth/auth.guard';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { LoginService } from './shared/services/login.service';
import { AuthInterceptor } from './shared/interceptor/auth-interceptor';
import { TokenInterceptor } from './shared/interceptor/token-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    
  
    
  ],
  imports: [
    FlexLayoutModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    BrowserAnimationsModule,
    DataTablesModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    Ng2Rut,
    LeafletModule.forRoot()
    
  
    
  ],
  providers: [AuthGuard,   
    { provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true },
    { provide:HTTP_INTERCEPTORS,useClass:TokenInterceptor,multi:true }] ,
  bootstrap: [AppComponent]
  
})
export class AppModule { }
