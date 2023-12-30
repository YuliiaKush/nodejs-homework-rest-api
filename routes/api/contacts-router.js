import express from "express";

import contactsController from "../../controllers/contacts-controller.js";

import { isEmptyBody, isValidId } from "../../middlewares/index.js";

const contactsRouter = express.Router();

contactsRouter.get("/", contactsController.getAll);

contactsRouter.get("/:id", isValidId, contactsController.getById);

contactsRouter.post("/", isEmptyBody, contactsController.add);

contactsRouter.patch(
  "/:id/favorite",
  isValidId,
  isEmptyBody,
  contactsController.updateFavoriteById
);

contactsRouter.delete("/:id", isValidId, contactsController.deleteById);

contactsRouter.put(
  "/:id",
  isEmptyBody,
  isValidId,
  contactsController.updateById
);

export default contactsRouter;