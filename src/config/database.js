import { Sequelize } from "sequelize"; //instancia en Sequelize, conexión actica de la base de datos 
import "dotenv/config";
import { log } from "console";

export const sequelize = new Sequelize( //conexión con la base de datos 
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {

        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
        logging: false,
    }
)
export const startDb = async() =>{ //función asincrónica que se crea para probar la conexión con la base de datos 
  try { 
      await sequelize.authenticate(); //esto prueba la conexión, si anda bien imprime lo siguiente: 
      console.log("Conexión exitosa a la base de datos ");
      await sequelize.sync ({ force: false}); //el sequelize.sync force: false, crea las tablas en la base de datos a partir de los modelos, y si ya existen, las deja como estan. 
      console.log("Las tablas está sincronizadas correctamente.");
      
  } catch (error) {
    console.log("No se pudo conecta a la base de datos ");
    
  }
}
