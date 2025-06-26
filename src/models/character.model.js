import { sequelize } from "../config/database.js"; 
import { DataTypes } from "sequelize"; //se usa para definir que tipo de dato es cada campo

export const Character = sequelize.define("Character", { //acá se crea el modelo Character. Se usa para que Sequelize pueda crear la tabla Characters e la base de datos
    name: {
        type: DataTypes.STRING,
        allownull: false,  //es obligatorio
        unique: true, //no puede repetirse

    },
    ki: {
        type: DataTypes.INTEGER, 
        allowNull: false,
    },
    race: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    gender: {
        type: DataTypes.ENUM("Male", "Female"),
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true, //opcional
    }
}
)

export default Character; 
