import { Router } from "express";
import { profile } from "../controllers/profile";

const profileRoute = Router();

profileRoute.post('/updateProfile',profile);

export default profileRoute