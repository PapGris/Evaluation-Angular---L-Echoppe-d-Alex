import { Injectable, signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

export interface Utilisateur {
  email: string;
  admin: boolean;
}

@Injectable({ providedIn: 'root' })
export class ApiService {
  private http = inject(HttpClient);
  private router = inject(Router);
  
  user = signal<Utilisateur | null>(JSON.parse(localStorage.getItem('user') || 'null'));

  login(credentials: any) {
      return this.http.post('http://localhost:3000/login', credentials).subscribe({
        next: (u: any) => {
          this.user.set(u);
          localStorage.setItem('user', JSON.stringify(u));
          
          if (u.admin) {
            this.router.navigate(['/admin']); 
          } else {
            this.router.navigate(['/game']);  
          }
        },
        error: () => alert("Identifiants incorrects")
      });
    }

  logout() {
    this.user.set(null);
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}