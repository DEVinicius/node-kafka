import { Router } from "express";
import { BookController } from "./infra/http/book.controller";

const bookRoutes = Router();
const bookController = new BookController();

bookRoutes.post("/", bookController.create);

export { bookRoutes }