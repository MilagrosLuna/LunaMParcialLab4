export class Producto {
  id: string;
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
    pais: string,
    id = ''
  ) {
    this.id = id;
    this.descripcion = descripcion;
    this.codigo = codigo;
    this.precio = precio;
    this.stock = stock;
    this.comestible = comestible;
    this.pais = pais;
  }
}
