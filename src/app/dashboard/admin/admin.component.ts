import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { CreateUserDialogComponent } from './create-user-dialog.component';


@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatOptionModule,
    CreateUserDialogComponent
  ],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  newUser = {
    username: '',
    email: '',
    password: '',
    role: ''
  };

  createUser() {
    console.log('Nouvel utilisateur créé:', this.newUser);

    // Ici normalement tu fais une requête HTTP pour envoyer vers ton backend
    // this.userService.createUser(this.newUser).subscribe(...)

    alert('Utilisateur créé avec succès !');
    
    // Réinitialiser le formulaire
    this.newUser = {
      username: '',
      email: '',
      password: '',
      role: ''
    };
  }
}
