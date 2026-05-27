import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notification',
  imports: [CommonModule],
  templateUrl: './notification.html',
  styleUrl: './notification.scss'
})
export class NotificationComponent {
  activities = ['Dance', 'Music (Vocal & Instrumental)', 'Painting, Art & Craft', 'Gardening', 'Sports (Indoor and Outdoor)', 'Yoga', 'Gymnastics'];
}
