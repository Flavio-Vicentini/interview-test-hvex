import { inject, injectable } from "tsyringe";

import { IUpdateUserDTO } from "../../dtos/IUpdateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class UpdateUserService {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}
  async execute({
    _id,
    name,
    username,
    password,
    last_access,
  }: IUpdateUserDTO): Promise<void> {
    await this.usersRepository.findUserByIdAndUpdate({
      _id,
      name,
      username,
      password,
      last_access,
    });
  }
}

export { UpdateUserService };
