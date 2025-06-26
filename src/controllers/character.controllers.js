import { Character } from "../models/character.model.js";

export const getAllCharacters = async (req, res) => { //estaf funcion maneja lospedidos GET (para ver personajes). 
    try{ //intenta ejecutar el código sin errores 
        const characters = await Character.findAll();
        res.status(200).json(characters);  //envia un código HTTP de que todo está bien y manda la lista de personajes en formato json

    } catch (error) {
        res.status(500).json({ message: "Error al mostrar personajes", error}); 
    }
};

// 🔹 Traer uno por ID
export const getCharacterById = async (req, res) => {
  const { id } = req.params; //extrae el ID de la URL 
  try {
    const character = await Character.findByPk(id); //busca el personaje por su PK
    if (!character) {
      return res.status(404).json({ message: "Personaje no encontrado" });
    }
    res.status(200).json(character);
  } catch (error) {
    res.status(500).json({ message: "Error al buscar personaje", error });
  }
};

// 🔹 Crear un personaje nuevo
export const createCharacter = async (req, res) => { //este controlador crea un nuevo personaje, no sin antes hacer sus validaciones
  const { name, ki, race, gender, description } = req.body;

  // Validaciones:
  if (!name || !ki || !race || !gender) {
    return res.status(400).json({ message: "Faltan campos obligatorios" }); 
  }

  if (!Number.isInteger(ki)) {
    return res.status(400).json({ message: "El ki debe ser un número entero" });
  }

  if (gender !== "Male" && gender !== "Female") {
    return res.status(400).json({ message: "El género debe ser 'Male' o 'Female'" });
  }

  try {
    const existing = await Character.findOne({ where: { name } });
    if (existing) {
      return res.status(400).json({ message: "Ya existe un personaje con ese nombre" });
    }

    const newCharacter = await Character.create({
      name,
      ki,
      race,
      gender,
      description,
    });

    res.status(201).json(newCharacter);
  } catch (error) {
    res.status(500).json({ message: "Error al crear personaje", error });
  }
};

// 🔹 Actualizar un personaje
export const updateCharacter = async (req, res) => {
  const { id } = req.params;
  const { name, ki, race, gender, description } = req.body;

  try {
    const character = await Character.findByPk(id);
    if (!character) {
      return res.status(404).json({ message: "Personaje no encontrado" });
    }

    if (!name || !ki || !race || !gender) {
      return res.status(400).json({ message: "Faltan campos obligatorios" });
    }

    if (!Number.isInteger(ki)) {
      return res.status(400).json({ message: "El ki debe ser un número entero" });
    }

    if (gender !== "Male" && gender !== "Female") {
      return res.status(400).json({ message: "El género debe ser 'Male' o 'Female'" });
    }

    const nameExists = await Character.findOne({
      where: { name },
    });

    if (nameExists && nameExists.id !== Number(id)) {
      return res.status(400).json({ message: "Ya existe otro personaje con ese nombre" });
    }

    await character.update({
      name,
      ki,
      race,
      gender,
      description,
    });

    res.status(200).json(character);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar personaje", error });
  }
};

// 🔹 Eliminar personaje
export const deleteCharacter = async (req, res) => {
  const { id } = req.params;

  try {
    const character = await Character.findByPk(id);
    if (!character) {
      return res.status(404).json({ message: "Personaje no encontrado" });
    }

    await character.destroy();
    res.status(200).json({ message: "Personaje eliminado con éxito" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar personaje", error });
  }
};