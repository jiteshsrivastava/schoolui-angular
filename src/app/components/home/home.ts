import { Component } from '@angular/core';
import { ImgSliderComponent } from '../img-slider/img-slider';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [ImgSliderComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent {}
