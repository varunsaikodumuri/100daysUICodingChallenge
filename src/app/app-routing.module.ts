import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
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
import { VideoPlayerComponent } from './video-player/video-player.component';


const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: '/home'
},
{ path: 'home', component: HomeComponent },
{ path: 'day1', component: ImageGalleryComponent },
{ path: 'day3', component: MinesweeperComponent },
{ path: 'day5', component: ImageSliderComponent },
{ path: 'day7', component: ImageCarouselComponent },
{ path: 'day8', component: FlexboxLayoutComponent },
{ path: 'day9', component: GridLayoutComponent },
{ path: 'day10', component: ImageSpanComponent },
{ path: 'day11', component: ButtonAccordionComponent },
{ path: 'day12', component: SplitScreenComponent },
{ path: 'day13', component: LandingPageV1Component },
{ path: 'day19', component: UserInputsComponent },
{ path: 'day21', component: VideoBackgroundComponent },
{ path: 'day25', component: VideoPlayerComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
