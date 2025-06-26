import { Router } from "express";
import { //se importan todas las funciones que se escribieron en character.controllers.js
  getAllCharacters,
  getCharacterById,
  createCharacter,
  updateCharacter,
  deleteCharacter
} from "../controllers/character.controllers.js";

const router = Router();

router.get("/characters", getAllCharacters);
router.get("/characters/:id", getCharacterById);
router.post("/characters", createCharacter);
router.put("/characters/:id", updateCharacter);
router.delete("/characters/:id", deleteCharacter);

export { router }; //esto es para exportar el router y que se pueda usar en app.js 
