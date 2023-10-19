export class Container {
  id: string;
  codigo: number;
  color: string;
  empresa: string;
  capacidad: number;

  constructor(
    codigo: number,
    color: string,
    empresa: string,
    capacidad: number,
    id = ''
  ) {
    this.id = id;
    this.color = color;
    this.codigo = codigo;
    this.empresa = empresa;
    this.capacidad = capacidad;
  }
}
