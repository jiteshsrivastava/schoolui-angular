import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-img-slider',
  imports: [CommonModule],
  templateUrl: './img-slider.html',
  styleUrl: './img-slider.scss'
})
export class ImgSliderComponent {
  currentIndex = 0;
  images = [
    { src: 'assets/images/slider/1.jpg', alt: 'School Photo 1' },
    { src: 'assets/images/slider/2.jpg', alt: 'School Photo 2' },
    { src: 'assets/images/slider/3.jpg', alt: 'School Photo 3' },
  ];

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  goTo(i: number) {
    this.currentIndex = i;
  }
}
