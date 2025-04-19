import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';

@Component({
  selector: 'app-create-user-dialog',
  standalone: true,
  imports: [
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatOptionModule
  ],
  templateUrl: './create-user-dialog.component.html',
  styleUrls: ['./create-user-dialog.component.scss']
})
export class CreateUserDialogComponent {
  newUser = {
    username: '',
    email: '',
    password: '',
    role: ''
  };

  constructor(
    private dialogRef: MatDialogRef<CreateUserDialogComponent>,
    private userService: UserService
  ) {}

  createUser() {
    this.userService.createUser(this.newUser).subscribe({
      next: () => {
        alert('Utilisateur créé avec succès ✅');
        this.dialogRef.close(true);
      },
      error: () => {
        alert('Erreur ❌ lors de la création');
      }
    });
  }

  cancel() {
    this.dialogRef.close();
  }
}
