import { Component, signal, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../services/api';
import { ClassementComponent } from '../classement/classement';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, FormsModule, ClassementComponent],
  templateUrl: './game.html',
  styleUrl: './game.scss'
})
export class GameComponent implements OnInit {
  private http = inject(HttpClient);
  api = inject(ApiService);

  availableSessions = signal<any[]>([]); 
  session = signal<any>(null);           
  currentIndex = signal(0);
  guess = signal<number | null>(null);
  feedback = signal<any>(null);

  ngOnInit() {
    this.loadAllSessions();
  }

  loadAllSessions() {
    this.http.get<any[]>('http://localhost:3000/sessions').subscribe(s => {
      this.availableSessions.set(s);
    });
  }

  rejoindre(s: any) {
    this.session.set(s);
    const saved = localStorage.getItem(`progress_${s.nom}`);
    if (saved) this.currentIndex.set(parseInt(saved));
  }

  valider() {
    const user = this.api.user();
    const currentSession = this.session();
    if (user && currentSession) {
      const payload = { 
        email: user.email, 
        prixPropose: this.guess(), 
        index: this.currentIndex() 
      };
      
      this.http.post(`http://localhost:3000/sessions/${currentSession.nom}/reponse`, payload)
        .subscribe((res: any) => {
          this.feedback.set(res);
          
          // --- MISE À JOUR DYNAMIQUE ---
          this.http.get<any[]>('http://localhost:3000/sessions').subscribe(allSessions => {
            this.availableSessions.set(allSessions);
            
            const updatedSession = allSessions.find(s => s.nom === currentSession.nom);
            if (updatedSession) {
              this.session.set(updatedSession);
            }
          });
        });
    }
  }

  suivant() {
    const next = this.currentIndex() + 1;
    this.currentIndex.set(next);
    localStorage.setItem(`progress_${this.session().nom}`, next.toString());
    this.feedback.set(null); 
    this.guess.set(null);
  }

  sortParticipants(a: any, b: any) {
  return b.score - a.score;
}
}