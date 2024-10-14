  
  // ### Simulador de carrera de coches
  
  // Pautas:
  // - Crea una clase `Car` con propiedades como posición, velocidad y nombre.
  // - Implementa un método para actualizar la posición de cada coche en cada "turno".
  // - Utiliza un bucle para simular la carrera hasta que un coche llegue a la meta.
  
class Car {
    constructor(name, position, speed) {
      this.name = name;
      this.position = position;
      this.speed = speed;
    }
  
    move() {
      this.position += this.speed; 
    }
  }
  
  // Datos iniciales
  const cars = [
    new Car("Car A", 0, 120),
    new Car("Car B", 0, 130),
    new Car("Car C", 0, 125)
  ];
  
  const raceDistance = 1000; // metros
  
  function race() {
    let isRaceOver = false;
    let turn = 0;
    while (!isRaceOver) {
      turn++;
      isRaceOver = cars.some((car) => {
        car.move(turn);
        console.log(`Turno: ${turn} - ${car.name} está en posición: ${car.position} metros`);
        if (car.position >= raceDistance) {
          console.log(`${car.name} llegó a la meta.`);
          return true;
        }
        return false;
      });
    }
  }
  race();
