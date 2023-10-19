import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth) {}
  demoUser = {
    email: 'milivictoria2004@gmail.com',
    password: '123456',
  };
  isUserAuthenticated(): boolean {
    const user = this.auth.currentUser;
    return !!user;
  }
  isAdminUser(): boolean {
    const user = this.auth.currentUser;
    if (user && user.displayName === 'admin') {
      return true;
    } else {
      return false;
    }
  }
  login({ email, password }: any) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  logout() {
    return signOut(this.auth);
  }
}
