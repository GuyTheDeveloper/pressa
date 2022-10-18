import { Router } from "express";
import upload from "../../lib/multer.js";
import checkToken from "../../middlewares/checkToken.js";
import validation from "../../middlewares/validation.js";
import controller from "./controller.js";

const router = Router();

router.get("/events", controller.GET);
router.get("/events/:eventId", controller.GET);
router.post("/events", validation, upload.single("image"), controller.POST);
router.put("/events/:eventId", checkToken, controller.PUTACCEPTED);
router.delete("/events/:eventId", checkToken, controller.DELETEREJECTED);

export default router;
