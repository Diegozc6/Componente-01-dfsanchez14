const express = require('express');
const app = express();
const port = 3000;

// Datos simulados
const products = [
  { id: 1, name: 'Laptop', price: 1000, image: 'laptop.png', stock: 5 },
  { id: 2, name: 'Mouse', price: 25, image: 'mouse.png', stock: 100 },
  { id: 3, name: 'Keyboard', price: 75, image: 'keyboard.png', stock: 50 },
  { id: 4, name: 'Monitor', price: 300, image: 'monitor.png', stock: 20 }
];

const cors = require('cors');
app.use(cors());

// Ruta para obtener todos los productos
app.get('/products', (req, res) => {
  res.json(products);
});

// Ruta que provoca un error (para probar el manejo de errores en el componente)
app.get('/error', (req, res) => {
  res.status(500).json({ message: 'Internal Server Error' });
});

app.listen(port, () => {
  console.log(`API REST escuchando en http://localhost:${port}`);
});
