import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoaderService } from '../Services/loader.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule,FormsModule,ReactiveFormsModule],
})
export class HomePage {

  receivetext:string;
  recovertext:string;
  constructor(private loader:LoaderService) {
    this.receivetext="";
    this.recovertext="";
  }

  async ngOnInit() {
    this.recovertext = await this.loader.load("test");// Cargar datos desde el almacenamiento del navegador y almacenar los datos en la variable
  }
  async print(){


    if(this.receivetext){ //Condicion para que se escriba el texto una vez que se envie.
      this.loader.save("test",this.receivetext);
      this.recovertext = this.receivetext;
      this.receivetext="";
    }
  }

}
