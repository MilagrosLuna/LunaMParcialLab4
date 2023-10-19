export class Producto {
  id: number;
  codigo: number;
  descripcion: string;
  precio: number;
  stock: number;
  comestible: boolean;
  pais: string;

  constructor(
    descripcion: string,
    codigo: number,
    precio: number,
    stock: number,
    comestible: boolean,
    pais: string
  ) {
    this.id = -1;
    this.descripcion = descripcion;
    this.codigo = codigo;
    this.precio = precio;
    this.stock = stock;
    this.comestible = comestible;
    this.pais = pais;
  }
}
