import { Response, Request } from "express";
import { container } from "tsyringe";

import { CreateUserService } from "./CreateUserService";

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, username, password, last_access } = request.body;

    const createUserService = container.resolve(CreateUserService);
    await createUserService.execute({ name, username, password, last_access });

    return response.status(201).send();
  }
}

export { CreateUserController };
