import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { IDateProvider } from "../../../../shared/providers/DateProvider/IDateProvider";
import { IUser } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class CreateUserService {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,
    @inject("DateProvider")
    private dateProvider: IDateProvider
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

    const match = this.dateProvider.ValidateDateFormat(
      last_access,
      "DD/MM/YYYY",
      "pt-br",
      true
    );
    if (!match) {
      throw new AppError(
        "Invalid date or format.The date format should be like 'DD/MM/YYYY'"
      );
    }
    const [day, mounth, year] = last_access.toString().split("/");
    const lastAccessParse = new Date(
      Number(year),
      Number(mounth) - 1,
      Number(day)
    );

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
