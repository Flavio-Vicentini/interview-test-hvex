import { inject, injectable } from "tsyringe";
import { ObjectID } from "typeorm";

import { AppError } from "../../../../errors/AppError";
import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class ListUserService {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}
  async execute(_id: string): Promise<User> {
    const user = await this.usersRepository.findUserById(_id);
    if (!user) {
      throw new AppError("User not found");
    }
    return user;
  }
}

export { ListUserService };
