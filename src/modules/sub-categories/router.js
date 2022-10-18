import { Router } from "express";
import checkToken from "../../middlewares/checkToken.js";
import validation from "../../middlewares/validation.js";
import controller from "./controller.js";

const router = Router();
router.get("/subcategories", controller.GET);
router.get("/subcategories/:subcategoryId", controller.GET);
router.post("/subcategories", validation, checkToken, controller.POST);
router.put("/subcategories/:subcategoryId", checkToken, controller.PUT);
router.delete("/subcategories/:subcategoryId", checkToken, controller.DELETE);

export default router;
