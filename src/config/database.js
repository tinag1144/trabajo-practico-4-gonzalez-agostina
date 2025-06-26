import { Sequelize } from "sequelize"; //instancia en Sequelize, conexión actica de la base de datos 
import "dotenv/config";

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
  } catch (error) {
    console.log("No se pudo conecta a la base de datos ");
    
  }
}
