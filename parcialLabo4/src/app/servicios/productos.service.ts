import { Injectable } from '@angular/core';
import { Producto } from '../clases/producto';
import {
  Firestore,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  constructor(private firestore: Firestore) {}

  public async guardarProductoBD(producto: Producto) {
    try {
      const productosCollection = collection(this.firestore, 'productos');
      const productoData = {
        descripcion: producto.descripcion,
        codigo: producto.codigo,
        precio: producto.precio,
        stock: producto.stock,
        comestible: producto.comestible,
        pais: producto.pais,
      };
      const docRef = await addDoc(productosCollection, productoData);
      console.log('Producto agregado con ID: ', docRef.id);
      return true;
    } catch (error) {
      console.error('Error al agregar el producto: ', error);
      return false;
    }
  }
  public async traerProductosBd(): Promise<Producto[]> {
    const pizzasCollection = collection(this.firestore, 'productos');
    const query = await getDocs(pizzasCollection);
    const pizzas: Producto[] = query.docs.map((doc) => {
      const data = doc.data();
      const pizza = new Producto(
        data['descripcion'],
        data['codigo'],
        data['precio'],
        data['stock'],
        data['comestible'],
        data['pais']
      );
      pizza.id = doc.id;
      return pizza;
    });
    return pizzas;
  }

  public async traerProductosConStockMayorACero(): Promise<Producto[]> {
    const productosCollection = collection(this.firestore, 'productos');
    const quersy = query(productosCollection, where('stock', '>', 0));
    const querySnapshot = await getDocs(quersy);

    const productos: Producto[] = querySnapshot.docs.map((doc) => {
      const data = doc.data();
      const producto = new Producto(
        data['descripcion'],
        data['codigo'],
        data['precio'],
        data['stock'],
        data['comestible'],
        data['pais']
      );
      producto.id = doc.id;
      return producto;
    });

    return productos;
  }
}
