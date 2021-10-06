import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class DeleteUserService {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}
  async execute(_id: string): Promise<void> {
    await this.usersRepository.deleteUserById(_id);
  }
}

export { DeleteUserService };
