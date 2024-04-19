import { Router } from "express";
import { profileUpdate, uploadEmoji, uploadProfilePic } from "../controllers/profile.js";

const profileRoute = Router();

profileRoute.post('/profile',profileUpdate);
profileRoute.post('/profilePic',uploadProfilePic);
profileRoute.post('/profileEmoji',uploadEmoji);

export default profileRoute