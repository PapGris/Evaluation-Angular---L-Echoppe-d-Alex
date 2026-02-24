import { Component, inject } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { ApiService } from './services/api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  api = inject(ApiService);
  router = inject(Router);

  goToLogin() {
    this.router.navigate(['/login']);
  }
}