import { Response, Request } from "express";
import { container } from "tsyringe";

import { ListUserService } from "./ListUserService";

class ListUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const listUserService = container.resolve(ListUserService);
    const {
      _id,
      name,
      username,
      password,
      last_access,
    } = await listUserService.execute(id);
    console.log(last_access);
    console.log(last_access.toLocaleDateString("pt-br"));
    return response.json({
      _id,
      name,
      username,
      password,
      last_access: last_access.toLocaleDateString("pt-br"),
    });
  }
}

export { ListUserController };
