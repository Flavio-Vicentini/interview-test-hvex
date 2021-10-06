import { IUpdateUserDTO } from "../dtos/IUpdateUserDTO";
import { IUser } from "../model/User";

interface IUsersRepository {
  create({ name, username, password, last_access }: IUser): Promise<void>;
  findUserById(_id: string): Promise<IUser>;
  findUserByIdAndUpdate({
    _id,
    name,
    username,
    password,
    last_access,
  }: IUpdateUserDTO): Promise<void>;
  deleteUserById(_id: string): Promise<void>;
  findUserByUsername(username: string): Promise<IUser>;
}

export { IUsersRepository };
