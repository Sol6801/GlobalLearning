# Índice 
## Ejercicios de JavaScript
1. [[#Sistema de gestión de biblioteca]]
2. [[#Analizador de ventas]]
3. [[#Gestor de tareas con prioridades]]
4. [[#Simulador de carrera de coches]]
5. [[#Generador de informes de gastos]]

## Ejercicios de TypeScript
1. [[#Lista de reproducción musical]]
2. [[#Gestor de inventario]]
3. [[#Sistema de reservas de hotel]]
4. [[#Calculadora de impuestos]]
5. [[#Juego de cartas simple]]
# JavaScript
### Sistema de gestión de biblioteca

Pautas:
- Crea clases para `Book` y `User`.
- Implementa métodos para prestar, devolver y buscar libros.
- Utiliza un array para almacenar los libros y los usuarios.

Datos iniciales:

```javascript
const initialBooks = [
  { id: 1, title: "1984", author: "George Orwell", available: true },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", available: true },
  { id: 3, title: "Pride and Prejudice", author: "Jane Austen", available: false }
];

const initialUsers = [
  { id: 1, name: "Alice Johnson", borrowedBooks: [] },
  { id: 2, name: "Bob Smith", borrowedBooks: [3] }
];
```

### Analizador de ventas

Pautas:
- Crea funciones para calcular el total de ventas, encontrar el producto más vendido y el vendedor del mes.
- Utiliza métodos de array como `reduce`, `map`, y `sort`.

Datos iniciales:

```javascript
const salesData = [
  { date: "2024-03-01", product: "Laptop", amount: 1200, salesperson: "Alice" },
  { date: "2024-03-02", product: "Phone", amount: 800, salesperson: "Bob" },
  { date: "2024-03-02", product: "Laptop", amount: 1200, salesperson: "Alice" },
  { date: "2024-03-03", product: "Tablet", amount: 500, salesperson: "Charlie" },
  { date: "2024-03-04", product: "Phone", amount: 800, salesperson: "Bob" },
  { date: "2024-03-05", product: "Laptop", amount: 1200, salesperson: "Alice" }
];
```

### Gestor de tareas con prioridades

Pautas:
- Crea una clase `Task` con propiedades como título, descripción, fecha de vencimiento y prioridad.
- Implementa métodos para agregar, eliminar y ordenar tareas.
- Utiliza `sort` para ordenar las tareas por prioridad.

Datos iniciales:

```javascript
const initialTasks = [
  { id: 1, title: "Completar informe", description: "Finalizar informe trimestral", dueDate: "2024-03-15", priority: 2 },
  { id: 2, title: "Reunión con cliente", description: "Presentar propuesta de proyecto", dueDate: "2024-03-10", priority: 1 },
  { id: 3, title: "Actualizar software", description: "Instalar últimas actualizaciones", dueDate: "2024-03-20", priority: 3 }
];
```

### Simulador de carrera de coches

Pautas:
- Crea una clase `Car` con propiedades como posición, velocidad y nombre.
- Implementa un método para actualizar la posición de cada coche en cada "turno".
- Utiliza un bucle para simular la carrera hasta que un coche llegue a la meta.

Datos iniciales:

```javascript
const cars = [
  { name: "Car A", position: 0, speed: 120 },
  { name: "Car B", position: 0, speed: 130 },
  { name: "Car C", position: 0, speed: 125 }
];

const raceDistance = 1000; // metros
```

### Generador de informes de gastos

Pautas:
- Crea clases para `Expense` y `ExpenseReport`.
- Implementa métodos para agregar gastos, calcular totales por categoría y generar un informe resumido.
- Utiliza métodos de array como `filter` y `reduce` para procesar los datos.

Datos iniciales:

```javascript
const initialExpenses = [
  { id: 1, description: "Almuerzo de negocios", amount: 55.50, category: "Comida", date: "2024-03-01" },
  { id: 2, description: "Taxi al aeropuerto", amount: 30.00, category: "Transporte", date: "2024-03-02" },
  { id: 3, description: "Hotel", amount: 200.00, category: "Alojamiento", date: "2024-03-02" },
  { id: 4, description: "Cena con cliente", amount: 80.00, category: "Comida", date: "2024-03-03" },
  { id: 5, description: "Vuelo de regreso", amount: 350.00, category: "Transporte", date: "2024-03-04" }
];
```

# TypeScript

### Lista de reproducción musical

```typescript
interface Song {
  title: string;
  artist: string;
  duration: number; // en segundos
}

class Playlist {
  private songs: Song[] = [];

  addSong(song: Song): void {
    // Implementar
  }

  removeSong(title: string): void {
    // Implementar
  }

  getTotalDuration(): string {
    // Implementar: Devolver duración total en formato "hh:mm:ss"
  }

  getSongsByArtist(artist: string): Song[] {
    // Implementar
  }
}
```

### Gestor de inventario

```typescript
interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

class Inventory {
  private products: Product[] = [];

  addProduct(product: Product): void {
    // Implementar
  }

  updateStock(id: number, newQuantity: number): void {
    // Implementar
  }

  getTotalValue(): number {
    // Implementar: Calcular el valor total del inventario
  }

  getLowStockProducts(threshold: number): Product[] {
    // Implementar: Devolver productos con cantidad menor al umbral
  }
}
```

### Sistema de reservas de hotel

```typescript
type RoomType = "single" | "double" | "suite";

interface Reservation {
  id: number;
  guestName: string;
  roomType: RoomType;
  checkInDate: Date;
  checkOutDate: Date;
}

class ReservationSystem {
  private reservations: Reservation[] = [];

  makeReservation(reservation: Reservation): void {
    // Implementar
  }

  cancelReservation(id: number): void {
    // Implementar
  }

  getReservationsByDate(date: Date): Reservation[] {
    // Implementar: Devolver reservas para una fecha específica
  }

  calculateOccupancy(month: number, year: number): number {
    // Implementar: Calcular porcentaje de ocupación para un mes y año dados
  }
}
```

### Calculadora de impuestos

```typescript
interface TaxPayer {
  name: string;
  annualIncome: number;
  expenses: number[];
}

class TaxCalculator {
  private baseRate: number = 0.15;

  calculateTax(taxPayer: TaxPayer): number {
    // Implementar: Calcular impuesto basado en ingreso y gastos
  }

  applyDeduction(taxPayer: TaxPayer, deduction: number): TaxPayer {
    // Implementar: Aplicar una deducción al ingreso del contribuyente
  }

  generateReport(taxPayers: TaxPayer[]): string {
    // Implementar: Generar un informe de impuestos para múltiples contribuyentes
  }
}
```

### Juego de cartas simple

```typescript
type Suit = "hearts" | "diamonds" | "clubs" | "spades";

interface Card {
  value: number;
  suit: Suit;
}

class Deck {
  private cards: Card[] = [];

  constructor() {
    // Implementar: Inicializar la baraja con todas las cartas
  }

  shuffle(): void {
    // Implementar: Mezclar las cartas de la baraja
  }

  deal(numCards: number): Card[] {
    // Implementar: Repartir un número específico de cartas
  }
}

class CardGame {
  private deck: Deck;
  private players: Card[][];

  constructor(numPlayers: number) {
    this.deck = new Deck();
    this.players = [];
    // Implementar: Inicializar el juego
  }

  playRound(): string {
    // Implementar: Jugar una ronda y determinar el ganador
  }
}

```