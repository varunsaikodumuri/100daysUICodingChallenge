import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { HeaderComponent } from './common/header/header.component';
import { MinesweeperComponent } from './minesweeper/minesweeper.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { ImageCarouselComponent } from './image-carousel/image-carousel.component';
import { FlexboxLayoutComponent } from './flexbox-layout/flexbox-layout.component';
import { GridLayoutComponent } from './grid-layout/grid-layout.component';
import { ImageSpanComponent } from './image-span/image-span.component';
import { ButtonAccordionComponent } from './button-accordion/button-accordion.component';
import { SplitScreenComponent } from './split-screen/split-screen.component';
import { LandingPageV1Component } from './landing-page-v1/landing-page-v1.component';
import { UserInputsComponent } from './user-inputs/user-inputs.component';
import { VideoBackgroundComponent } from './video-background/video-background.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ImageGalleryComponent,
    HeaderComponent,
    MinesweeperComponent,
    ImageSliderComponent,
    ImageCarouselComponent,
    FlexboxLayoutComponent,
    GridLayoutComponent,
    ImageSpanComponent,
    ButtonAccordionComponent,
    SplitScreenComponent,
    LandingPageV1Component,
    UserInputsComponent,
    VideoBackgroundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
