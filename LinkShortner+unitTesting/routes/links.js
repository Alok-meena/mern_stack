import express from "express";
import { createShorterLink , getOriginalUrl , getAnalytics} from "../controllers/linkController.js";

const router = express.Router();

router.post("/shorten",createShorterLink);
router.get("/:shortUrl",getOriginalUrl);
router.get("/:shortUrl/analytics",getAnalytics);

export default router;
