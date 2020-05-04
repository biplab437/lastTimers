import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { from } from 'rxjs';



import {AdminModule} from './admin/admin.module';
import {AuthModule} from './auth/auth.module';
import {CoursesModule} from './courses/courses.module';
import {StaticpagesModule} from './staticpages/staticpages.module';



@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AdminModule,
    AuthModule,
    CoursesModule,
    StaticpagesModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
