// Importar e inicializar libreria express

const express = require("express");
const app = express();

// Importar libreria cors y hacer llamados
var cors = require("cors");
app.use(cors());
app.use(express.json());
const router = express.Router();

// Endpoint
app.get("/", (req, res) => {
  res.send("API para guardar marcadores");
});

// Importar las rutas con los endpoints especificos

const rutas_marcadores = require("./routes/marcadores");
app.use(rutas_marcadores);


// Creacion de puerto
const port = 3000;

// Levantar el servidor para escuchar los puertos
app.listen(port, () => {
  console.log(`Escuchando API en http://localhost:${port}`);
});