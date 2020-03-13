class Pelicula{
    constructor(nombre,id){
      this.nombre=nombre;
      this.id=id;
    }
    mostrar(){
      return console.log(`Esta es ${this.nombre} del id ${this.id}`)
    }
  }
  
  const peliculaUno = new Pelicula('Batman', 1);
  const peliculaDos = new Pelicula('Superman', 2);
  
  console.log(peliculaUno.mostrar());
  console.log(peliculaDos.mostrar());
  
  class Serie extends Pelicula{
  
    reproducir(){
      return console.log(`Reproduciendo ${this.nombre} numero ${this.id}` );
    }
  }
  
  const serieUno = new Serie('Vikings', 1);
  
  console.log(serieUno.reproducir());