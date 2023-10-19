import { Component } from '@angular/core';
import { GithubService } from 'src/app/servicios/github.service';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent {
  userData: any;

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    // Llama al servicio para obtener los datos del usuario
    this.githubService.getUserInfo('MilagrosLuna').subscribe((data) => {
      this.userData = data;
    });
  }
}
