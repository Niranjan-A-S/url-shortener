import { Router } from "express";
import { getShortUrl, serverHomePage } from "../controllers/view-controller";

export const router = Router();

router.route('/').get(serverHomePage);
router.route('/:shortUrl').get(getShortUrl);


export default router;