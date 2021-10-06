import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { IDateProvider } from "../../../../shared/providers/DateProvider/IDateProvider";
import { IUpdateUserDTO } from "../../dtos/IUpdateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class UpdateUserService {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,
    @inject("DateProvider")
    private dateProvider: IDateProvider
  ) {}
  async execute({
    _id,
    name,
    username,
    password,
    last_access,
  }: IUpdateUserDTO): Promise<void> {
    const user = await this.usersRepository.findUserById(_id);
    if (!user) {
      throw new AppError("User not found.", 404);
    }
    if (!name || !username || !password || !last_access) {
      throw new AppError(
        "You have to provide name,username,password and last_access."
      );
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

    await this.usersRepository.findUserByIdAndUpdate({
      _id,
      name,
      username,
      password: passwordHashed,
      last_access: lastAccessParse,
    });
  }
}

export { UpdateUserService };
