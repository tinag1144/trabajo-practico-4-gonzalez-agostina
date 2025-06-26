import express from "express";//con esto se crea el servidor base 
import "dotenv/config"; //esto hace que el app.js pueda "leer" el .env 
import { startDb } from "./src/config/database.js"; //Importa el 
const app = express(); 
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hola Mundo"); //cuando se entra en la ruta raíz ("/") con el método get, se muestra el mensaje "Hola Mundo"
});

app.listen(PORT, async () => {
    await startDb(); 
  console.log(`Servidor corriendo en http://localhost:${PORT}`); //Arranca el servidor "escuchando" en el puerto 4000 y cuanto está todo listo, imprime el link del servidor 
});

