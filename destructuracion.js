const personaje = {
  nombre: 'Pepe',
  apellido: 'Argento',
  profesion: 'Zapatero',
  getDescripcion() {
    return `${nombre} ${apellido} es ${profesion}`;
  },
};

/*const nombre = personaje.nombre;
const apellido = personaje.apellido;
const profesion = personaje.profesion; */

//const { nombre, apellido, profesion } = personaje;

/*const imprimirPersonaje = ({ nombre, apellido, profesion }) => {
  console.log(nombre, apellido, profesion);
};

imprimirPersonaje(personaje); */

const personajes = ['Pepe', 'Moni', 'Koki'];

//const p1 = personajes[0];

const [, , p3] = personajes;

console.log(p3);
