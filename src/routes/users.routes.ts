import { Router } from "express";

import { CreateUserController } from "../modules/users/services/CreateUserService/CreateUserController";
import { DeleteUserController } from "../modules/users/services/DeleteUserService/DeleteUserController";
import { ListUserController } from "../modules/users/services/ListUserService/ListUserController";
import { UpdateUserController } from "../modules/users/services/UpdateUserService/UpdateUserController";

const usersRoutes = Router();

const createUserController = new CreateUserController();
const listUserController = new ListUserController();
const deleteUserController = new DeleteUserController();
const updateUserService = new UpdateUserController();

usersRoutes.post("/", createUserController.handle);
usersRoutes.get("/:id", listUserController.handle);
usersRoutes.delete("/:id", deleteUserController.handle);
usersRoutes.put("/:id", updateUserService.handle);

export { usersRoutes };
