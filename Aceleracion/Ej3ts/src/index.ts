type Product = {
  id: number;
  name: string;
  price: number;
  stock: number;
};

class ProductNotFoundError extends Error {
  constructor(id: number) {
    super(`El producto con ID: "${id}" no se ha encontrado.`);
    this.name = "ProductNotFoundError";
  }
}

class OutOfStockWarning extends Error {
  constructor(name: string) {
    super(`El producto: "${name}" está agotado.`);
    this.name = "OutOfStockWarning";
  }
}

function findProduct<T extends Product>(inventory: T[], id: number): T | undefined {
  const product = inventory.find(item => item.id === id);

  if (!product) {
    throw new ProductNotFoundError(id);
  }

  if (product.stock === 0) {
    throw new OutOfStockWarning(product.name);
  }

  console.log(`Producto encontrado: ${product.name}`);
  return product;
}

const inventory: Product[] = [
  { id: 1, name: "Camiseta", price: 19.99, stock: 50 },
  { id: 2, name: "Pantalón", price: 39.99, stock: 30 },
  { id: 3, name: "Zapatos", price: 59.99, stock: 0 },
];

// Caso: Producto encontrado
try {
  const product1 = findProduct(inventory, 1);
  console.log("Detalles del producto:", product1);
} catch (error) {
  if (error instanceof ProductNotFoundError || error instanceof OutOfStockWarning) {
    console.error(error.message);
  } else {
    console.error("Ha ocurrido un error.");
  }
}

// Caso: Producto agotado
try {
  const product2 = findProduct(inventory, 3);
  console.log("Detalles del producto:", product2);
} catch (error) {
  if (error instanceof ProductNotFoundError || error instanceof OutOfStockWarning) {
    console.error(error.message);
  } else {
    console.error("Ha ocurrido un error.");
  }
}

// Caso: Producto no encontrado
try {
  const product3 = findProduct(inventory, 4);
  console.log("Detalles del producto:", product3);
} catch (error) {
  if (error instanceof ProductNotFoundError || error instanceof OutOfStockWarning) {
    console.error(error.message);
  } else {
    console.error("Ha ocurrido un error.");
  }
}
