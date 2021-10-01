import { Response, Request } from "express";
import { container } from "tsyringe";
import { ObjectID } from "typeorm";

import { ListUserService } from "./ListUserService";

class ListUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const listUserService = container.resolve(ListUserService);
    const user = await listUserService.execute(id);
    return response.json(user);
  }
}

export { ListUserController };
