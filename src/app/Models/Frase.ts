export class Frase{
  key:string;
  value:string;

  constructor(key:string, value:string){
    this.key=key;
    this.value=value;
  }

  public getkey() : string {
    return this.key
  }

}
