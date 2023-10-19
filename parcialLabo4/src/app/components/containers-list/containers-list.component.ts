import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Container } from 'src/app/clases/container';
@Component({
  selector: 'app-containers-list',
  templateUrl: './containers-list.component.html',
  styleUrls: ['./containers-list.component.css'],
})
export class ContainersLISTComponent {
  @Input() containers: Container[] = [];

  @Output() selectedContainer = new EventEmitter<any>();

  containerSele: any = null;

  selectcontainer(container: any) {
    this.containerSele = container;
    this.selectedContainer.emit(container);
  }
}
