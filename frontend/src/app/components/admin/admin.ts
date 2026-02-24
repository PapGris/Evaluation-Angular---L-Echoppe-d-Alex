import { Component, signal, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../services/api';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin.html',
  styleUrl: './admin.scss'
})
export class AdminComponent implements OnInit {
  private http = inject(HttpClient);
  private api = inject(ApiService);
  
  nom = signal('');
  sessions = signal<any[]>([]); 

  ngOnInit() {
    this.chargerSessions();
  }

  chargerSessions() {
    this.http.get<any[]>('http://localhost:3000/sessions').subscribe(data => {
      this.sessions.set(data);
    });
  }

  creer() {
    const user = this.api.user();
    if (user && user.email && this.nom()) {
      this.http.post('http://localhost:3000/sessions', { 
        nom: this.nom(), 
        createur: user.email 
      }).subscribe(() => {
        this.nom.set('');
        this.chargerSessions(); 
      });
    }
  }
}