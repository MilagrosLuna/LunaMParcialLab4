import { CanActivateFn } from '@angular/router';
import { AuthService } from '../servicios/auth.service';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const activateGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  if (authService.isUserAuthenticated()) {
    return true; 
  } else {
    const router = inject(Router);
    router.navigate(['/login']); 
    return false; 
  }
};