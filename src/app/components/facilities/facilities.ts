import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-facilities',
  imports: [CommonModule],
  templateUrl: './facilities.html',
  styleUrl: './facilities.scss'
})
export class FacilitiesComponent {
  facilities = [
    {
      title: 'Computer Lab',
      images: ['assets/images/facilities/computerImg1.jpg', 'assets/images/facilities/computerImg2.jpg', 'assets/images/facilities/computerImg3.jpg'],
      currentIndex: 0
    },
    {
      title: 'Science Lab',
      images: ['assets/images/facilities/scienceImg1.jpg', 'assets/images/facilities/scienceImg2.jpg', 'assets/images/facilities/scienceImg3.jpg'],
      currentIndex: 0
    },
    {
      title: 'Library',
      images: ['assets/images/facilities/libraryImg1.jpg', 'assets/images/facilities/libraryImg2.jpg', 'assets/images/facilities/libraryImg3.jpg'],
      currentIndex: 0
    }
  ];

  prevSlide(fac: any) {
    fac.currentIndex = (fac.currentIndex - 1 + fac.images.length) % fac.images.length;
  }
  nextSlide(fac: any) {
    fac.currentIndex = (fac.currentIndex + 1) % fac.images.length;
  }
}
