import { Storage } from '@ionic/storage-angular';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {


  constructor(private storage:Storage) {
    this.initstorage();
  }


  private async initstorage(){
      await this.storage.create(); //Crear el almacenamiento para la aplicación
  }

  public save(key:string, value:string){
    return this.storage.set(key,value) // Guardar datos en el storage del navegador
  }
  public async load(key:string):Promise<string>{
    return new Promise<string>((resolve,reject)=>{
      this.storage.get(key).then((text)=>{
        resolve(text); // Funcion para cargar los datos del storage mediante promesas
      })
    })
  }
}
