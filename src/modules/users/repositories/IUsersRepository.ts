import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../entities/User";

interface IUsersRepository {
  create({
    name,
    nickname,
    password,
    last_access,
  }: ICreateUserDTO): Promise<void>;
  findUserById(_id: string): Promise<User>;
}

export { IUsersRepository };
