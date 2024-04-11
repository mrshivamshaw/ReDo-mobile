import { Router } from "express";
import { login, signin } from "../controllers/auth";
const authRoute = Router();

authRoute.get('/login',login);
authRoute.post('/signin',signin);

export default authRoute