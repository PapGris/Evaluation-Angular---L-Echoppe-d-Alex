import { Component, input, inject, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api';

@Component({
  selector: 'app-classement',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './classement.html',
  styleUrl: './classement.scss'
})
export class ClassementComponent {
  api = inject(ApiService);
  participants = input<any[]>([]); 
  onQuitter = output<void>();

  get sortedParticipants() {
    return [...this.participants()].sort((a, b) => b.score - a.score);
  }


  quitterPartie() {
    this.onQuitter.emit();
  }
}