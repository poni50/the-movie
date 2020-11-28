import { HomepageRoutingModule } from './homepage-routing.module';
import { MaterialModule } from './../shared/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomInfoComponent } from './room-info/room-info.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieInfoComponent } from './movie-info/movie-info.component';

@NgModule({
  declarations: [RoomInfoComponent, HomeComponent, MovieInfoComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    HomepageRoutingModule,
  ],
  exports: [HomeComponent, MovieInfoComponent],
})
export class HomepageModule {}
