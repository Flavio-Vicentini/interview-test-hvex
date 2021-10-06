import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class DeleteUserService {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}
  async execute(_id: string): Promise<void> {
    const user = await this.usersRepository.findUserById(_id);
    if (!user) {
      throw new AppError("User not found.", 404);
    }
    await this.usersRepository.deleteUserById(_id);
  }
}

export { DeleteUserService };
