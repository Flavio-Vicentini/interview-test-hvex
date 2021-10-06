import { Response, Request } from "express";
import { container } from "tsyringe";

import { DeleteUserService } from "./DeleteUserService";

class DeleteUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id: _id } = request.params;
    const deleteUserService = container.resolve(DeleteUserService);
    await deleteUserService.execute(_id);
    return response.send();
  }
}

export { DeleteUserController };
