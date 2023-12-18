import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  public productos: Producto[] = [];

  constructor() {
    this.productos = [
      {
        nombre: "Botas Camperas",
        descripcion: "Cierre con cremallera, tacón 5 cm, zapato de estilo casual, suela de goma termoplástica, exterior piel, forro interior y plantilla piel.",
        precio: "105.00 €",
        talla: [35, 36, 37, 38, 39, 40],
        urlImage: "https://media.catchalot.es/79601-pdt_640/botas-camperas-beige-para-mujer-kissia-795.jpg",
        genero: "Mujer",
        color: "Beige",
      },
      {
        nombre: "Botas negras mujer piel Paula Urban",
        descripcion: "Cierre con cremallera, tacón 6 cm, zapato de estilo casual, suela de goma termoplástica, exterior piel, forro interior textil y plantilla piel.",
        precio: "159,95 €",
        talla: [35, 36, 37, 38, 39, 40],
        urlImage: "https://media.catchalot.es/78201-pdt_640/botas-negras-mujer-piel-paula-urban-pull-14-392.jpg",
        genero: "Mujer",
        color: "Negro",
      },
      {
        nombre: "Botín de piel serraje para mujer ",
        descripcion: "Botín de piel serraje para mujer Desireé Mulan5 color taupe. Características: Cierre con cremallera, tacón 6 cm, zapato de estilo casual, suela de goma, exterior piel de serraje, forro interior textil y plantilla piel.",
        precio: "99,95 €",
        talla: [35, 36, 37, 38, 39, 40],
        urlImage: "https://media.catchalot.es/78076-pdt_640/botin-de-piel-serraje-para-mujer-desiree-mulan5.jpg",
        genero: "Mujer",
        color: "Marrón",
      },
      {
        nombre: "Botines amarillos Walk and Fly",
        descripcion: "Cierre de cordones y cremallera, altura de 3 cm, zapato de estilo casual, suela de goma termoplástica, exterior piel, forro interior textil y plantilla piel.",
        precio: "99,95 €",
        talla: [35, 36, 37, 38, 39, 40],
        urlImage: "https://media.catchalot.es/78966-pdt_640/botines-amarillos-walk-and-fly-zermatt-927-007.jpg",
        genero: "Mujer",
        color: "Amarillo",
      },
      {
        nombre: "Mocasines Noa Harmon Bonnie",
        descripcion: "Mocasín con altura de 8 cm, suela de goma termoplástica, exterior sintético con forro interior y plantilla de piel.",
        precio: "99,00 €",
        talla: [35, 36, 37, 38, 39, 40],
        urlImage: "https://media.catchalot.es/64333-pdt_640/mocasines-noa-harmon-bonnie-9107.jpg",
        genero: "Mujer",
        color: "Multicolor",
      },
      {
        nombre: "Zapatillas de piel",
        descripcion: "Cierre de cordones y cremallera, cuña 4 cm, zapato de estilo casual, suela de goma, exterior piel, forro textil y plantilla piel. ¡Disfruta de la calidad y la comodidad en un mismo modelo!",
        precio: "89,95 €",
        talla: [35, 36, 37, 38, 39, 40],
        urlImage: "https://media.catchalot.es/76539-pdt_640/zapatillas-de-piel-para-mujer-carmela-160850.jpg",
        genero: "Mujer",
        color: "Beige",
      },
      {
        nombre: "Botas cowboy",
        descripcion: "Cierre de cremallera, tacón 5 cm, zapato de estilo casual, suela de goma, exterior piel, forro interior y plantilla sintético.",
        precio: "109.99 €",
        talla: [35, 36, 37, 38, 39, 40],
        urlImage: "https://media.catchalot.es/76423-pdt_640/botas-cowboy-marrones-de-piel-catchalot-zeta-4116.jpg",
        genero: "Mujer",
        color: "Cuero",
      },

    ];
  }

  getProductos(): Producto[] {
    return this.productos;
  }

}
