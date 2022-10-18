import { Router } from "express";
import checkToken from "../../middlewares/checkToken.js";
import validation from "../../middlewares/validation.js";
import controller from "./controller.js";

const router = Router();
router.get("/categories", controller.GET);
router.get("/categories/:categoryId", controller.GET);
router.post("/categories", validation, checkToken, controller.POST);
router.put("/categories/:categoryId", checkToken, controller.PUT);
router.delete("/categories/:categoryId", checkToken, controller.DELETE);

export default router;
