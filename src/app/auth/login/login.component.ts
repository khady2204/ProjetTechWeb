import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

// 🔥 TRÈS IMPORTANT : on ajoute les imports nécessaires ici
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-login',
  standalone: true, // <= C'est un Standalone Component
  imports: [
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  credentials = { email: '', password: '' };

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  login() {
    this.authService.login(this.credentials).subscribe({
      next: (res: any) => {
        localStorage.setItem('token', res.token);
        const role = this.authService.getRole() ?? 'UNKNOWN'; 
        this.redirectUser(role);
      },
      error: (err) => {
        alert('Erreur de connexion');
      }
    });
  }
  

  redirectUser(role: string) {
    switch (role) {
      case 'ADMIN':
        this.router.navigate(['/admin']);
        break;
      case 'ENSEIGNANT':
        this.router.navigate(['/enseignant']);
        break;
      case 'ETUDIANT':
        this.router.navigate(['/etudiant']);
        break;
      case 'APPUI_INSERTION':
        this.router.navigate(['/appui-insertion']);
        break;
      case 'ADMINISTRATIF':
        this.router.navigate(['/administratif']);
        break;
      default:
        this.router.navigate(['/login']);
        break;
    }
  }
  
  
}
