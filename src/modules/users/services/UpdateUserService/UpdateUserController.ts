import { Response, Request } from "express";
import { container } from "tsyringe";

import { UpdateUserService } from "./UpdateUserService";

class UpdateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id: _id } = request.params;
    const { name, username, password, last_access } = request.body;
    const updateUserService = container.resolve(UpdateUserService);
    await updateUserService.execute({
      _id,
      name,
      username,
      password,
      last_access,
    });
    return response.send();
  }
}

export { UpdateUserController };
