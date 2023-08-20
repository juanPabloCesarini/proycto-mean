export class Producto {
  _id?: number; // el ? significa que el dato es opcional, el guion bajo es para igualar con MONGODB
  nombre: string;
  categoria: string;
  ubicacion: string;
  precio: number;

  constructor(nombre:string, categoria:string, ubicacion:string, precio:number){
    this.nombre = nombre;
    this.categoria = categoria;
    this.ubicacion = ubicacion;
    this.precio = precio;
  }
}
