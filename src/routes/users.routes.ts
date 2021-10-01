import { Router } from "express";

import { CreateUserController } from "../modules/users/services/CreateUserService/CreateUserController";
import { ListUserController } from "../modules/users/services/ListUserService/ListUserController";

const usersRoutes = Router();

const createUserController = new CreateUserController();
const listUserController = new ListUserController();

usersRoutes.post("/", createUserController.handle);
usersRoutes.post("/:id", listUserController.handle);

export { usersRoutes };
