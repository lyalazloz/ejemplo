const firebase = require('firebase');
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyDnvtILNNV6g_KXCNMhnBd11-Lx6qOPx64",
  authDomain: "katarite.firebaseapp.com",
  projectId: "katarite",
});

var db = firebase.firestore();


export const products = [
  {
    "id": 29,
    "genre": "ciencia ficcion",
    "title": "Ingenieros del mundo anillo",
    "description": "Novela que relata una aventura de ciencia ficcion, por Larry Niven ",
    "image": "https://images-na.ssl-images-amazon.com/images/I/51q0gsJ-+nL._SX318_BO1,204,203,200_.jpg",
    "price":  295,
    "outstanding": true,
  },
  {
    "id": 53,
    "genre": "terror",
    "title": "El cuervo y otros poemas",
    "description": "Antologia de cuentos del genio del terror Edgar Allan Poe.",
    "image": "https://statics.convergencia.trevenque.es/portadas/Originales/DIGITALBOOKS/52707f6ecef14929881cd2041b787a55.jpg",
    "price": 450,
    "outstanding": true,
  },
  {
    "id": 14,
    "genre": "fantasia",
    "title": "La puerta del bosque",
    "description": "Novela de Melissa Albert, un relato fantastico sobre una historia entre madre e hija",
    "image": "https://images-na.ssl-images-amazon.com/images/I/51dQ8rojkKL._SX325_BO1,204,203,200_.jpg",
    "price": 334,
    "outstanding": true,
  },
  {
    "id": 23,
    "genre": "misterio",
    "title": "Reina Roja",
    "description": "Libro de Juan Gomez Jurado. En un aura de misterio, una mujer extraordinariamente inteligente conoce a un inspector acusado de corrupcion",
    "image": "https://images.cdn1.buscalibre.com/fit-in/360x360/2b/4c/2b4cf2031a188e2dc45c91e206c7a8ce.jpg",
    "price": 510,
    "outstanding": true,
  },
]

productos.forEach((obj) => {
  db.collection("productos")
    .add({
      id: obj.id,
      genre: obj.genre,
      title: obj.title,
      description: obj.description,
      img: obj.img,
      price: obj.price,
      outstanding: obj.outstanding,
    })
    .then((docRef) => {
      console.log("Producto registrado con ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error al agregar un documento: ", error);
    });
});