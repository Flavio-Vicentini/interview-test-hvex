import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { IUser } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class CreateUserService {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}
  async execute({
    name,
    username,
    password,
    last_access,
  }: IUser): Promise<void> {
    const user = await this.usersRepository.findUserByUsername(username);
    if (user) {
      throw new AppError("Username already exists.");
    }

    const lastAccessParse = new Date(last_access);
    const passwordHashed = await hash(password, 6);

    await this.usersRepository.create({
      name,
      username,
      password: passwordHashed,
      last_access: lastAccessParse,
    });
  }
}

export { CreateUserService };
