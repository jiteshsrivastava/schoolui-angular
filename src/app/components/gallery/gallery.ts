import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss'
})
export class GalleryComponent implements AfterViewInit {
  fbVideos = [
    { href: 'https://www.facebook.com/100093913191887/videos/293346816977812/', title: 'DUSSEHRA (RAVAAN DAHAAN) PROGRAM ON 21/10/2023' },
    { href: 'https://www.facebook.com/100093913191887/videos/1477401589721277/', title: 'DUSSEHRA DANCE PROGRAM 21/10/2023' },
    { href: 'https://www.facebook.com/100093913191887/videos/361914996185953/', title: 'DUSSEHRA DANCE PROGRAM 2 ON 21/10/2023' },
    { href: 'https://www.facebook.com/100093913191887/videos/317184197436908/', title: 'PROGRAM ON 15/08/2023' },
    { href: 'https://www.facebook.com/100093913191887/videos/746576240570702/', title: '15/AUG/2023 PROGRAM CELEBRATE' },
    { href: 'https://www.facebook.com/100093913191887/videos/1434039817389706/', title: 'INDEPENDENCE CELEBRATE PROGRAM ON 15/08/2023' },
  ];

  ngAfterViewInit() {
    // Load FB SDK
    const script = document.createElement('script');
    script.async = true;
    script.defer = true;
    script.crossOrigin = 'anonymous';
    script.src = 'https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v17.0';
    document.body.appendChild(script);
  }
}
