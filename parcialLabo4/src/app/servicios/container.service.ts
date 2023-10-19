import { Injectable } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from '@angular/fire/firestore';
import { Container } from '../clases/container';
@Injectable({
  providedIn: 'root',
})
export class ContainerService {
  constructor(private firestore: Firestore) {}

  public async guardarContainerBD(container: Container) {
    try {
      const containersCollection = collection(this.firestore, 'containers');
      const containerData = {
        codigo: container.codigo,
        color: container.color,
        empresa: container.empresa,
        capacidad: container.capacidad,
      };
      const docRef = await addDoc(containersCollection, containerData);
      console.log('Contenedor agregado con ID: ', docRef.id);
      return true;
    } catch (error) {
      console.error('Error al agregar el contenedor: ', error);
      return false;
    }
  }

  public async traerContainersBd(): Promise<Container[]> {
    const containersCollection = collection(this.firestore, 'containers');
    const query = await getDocs(containersCollection);
    const containers: Container[] = query.docs.map((doc) => {
      const data = doc.data();
      const container = new Container(
        data['codigo'],
        data['color'],
        data['empresa'],
        data['capacidad']
      );
      container.id = doc.id;
      return container;
    });
    return containers;
  }

  public async actualizarContainerBD(container: Container): Promise<boolean> {
    try {
      const containersCollection = collection(this.firestore, 'containers');
      const containerData = {
        codigo: container.codigo,
        color: container.color,
        empresa: container.empresa,
        capacidad: container.capacidad,
      };

      const containerId = container.id;

      await updateDoc(doc(containersCollection, containerId), containerData);

      console.log('Contenedor actualizado con ID: ', containerId);
      return true;
    } catch (error) {
      console.error('Error al actualizar el contenedor: ', error);
      return false;
    }
  }

  public async borrarContainerBD(containerId: string): Promise<boolean> {
    try {
      const containersCollection = collection(this.firestore, 'containers');

      await deleteDoc(doc(containersCollection, containerId));

      console.log('Contenedor eliminado con ID: ', containerId);
      return true;
    } catch (error) {
      console.error('Error al eliminar el contenedor: ', error);
      return false;
    }
  }
}
