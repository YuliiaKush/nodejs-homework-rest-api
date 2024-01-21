import express from "express";
import authController from "../../controllers/auth-controller.js";
import { isEmptyBody, authenticate, upload } from "../../middlewares/index.js";
import { validateBody } from "../../decorators/index.js";
import {
  userSignupSchema,
  userSigninSchema,
  userEmailSchema,
} from "../../models/User.js";

const authRouter = express.Router();

authRouter.post(
  "/register",
  isEmptyBody,
  validateBody(userSignupSchema),
  authController.register
);

authRouter.get("/verify/:verificationToken", authController.verifyEmail);

authRouter.post(
  "/verify",
  isEmptyBody,
  validateBody(userEmailSchema),
  authController.resendVerify
);

authRouter.post(
  "/login",
  isEmptyBody,
  validateBody(userSigninSchema),
  authController.login
);

authRouter.get("/current", authenticate, authController.current);

authRouter.post("/logout", authenticate, authController.logout);

authRouter.patch("/", isEmptyBody, authenticate, authController.update);

authRouter.patch(
  "/avatars",
  upload.single("avatar"),
  isEmptyBody,
  authenticate,
  authController.updateAvatar
);

export default authRouter;