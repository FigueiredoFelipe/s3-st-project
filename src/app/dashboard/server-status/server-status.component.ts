import { Component } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
  // host: {
  //   id: 'status',
  // },
})
export class ServerStatusComponent {
  currentStatus: 'online' | 'offline' | 'unknown' = 'online';

  constructor() {
    setInterval(() => {
      const rnd = Math.random();

      if (rnd < 0.46) {
        this.currentStatus = 'online';
      } else if (rnd > 0.8) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 5000);
  }
}
