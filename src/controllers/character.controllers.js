import { Character } from "../models/character.model.js";

export const getAllCharacters = async (req, res) => { //estaf funcion maneja lospedidos GET (para ver personajes). 
    try{ //intenta ejecutar el código sin errores 
        const characters = await Character.findAll();
        res.status(200).json(characters);  //envia un código HTTP de que todo está bien y manda la lista de personajes en formato json

    } catch (error) {
        res.status(500).json({ message: "Error al mostrar personajes", error}); 
    }
};