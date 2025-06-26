import { Router } from "express";
import { getAllCharacters } from "../controllers/character.controllers.js";

const characterRoutes = Router();

characterRoutes.get("/characters", getAllCharacters);


export { characterRoutes};