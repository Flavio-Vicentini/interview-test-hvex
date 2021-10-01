import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";

import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class CreateUserService {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}
  async execute({
    name,
    nickname,
    password,
    last_access,
  }: ICreateUserDTO): Promise<void> {
    const lastAccessParse = new Date(last_access);
    const passwordHashed = await hash(password, 6);

    await this.usersRepository.create({
      name,
      nickname,
      password: passwordHashed,
      last_access: lastAccessParse,
    });
  }
}

export { CreateUserService };
