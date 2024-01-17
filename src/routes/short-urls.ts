import { Router } from "express";
import { postShortUrls } from "../controllers/short-url-controller";

export const router = Router();

router.route('/').post(postShortUrls);


export default router;