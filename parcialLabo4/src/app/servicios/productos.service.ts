import { Injectable } from '@angular/core';
import { Producto } from '../clases/producto';
import {
  Firestore,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
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
}
