import { IUpdateUserDTO } from "../dtos/IUpdateUserDTO";
import { IUser, UserModel } from "../model/User";
import { IUsersRepository } from "./IUsersRepository";

class UsersRepository implements IUsersRepository {
  async create({
    name,
    username,
    password,
    last_access,
  }: IUser): Promise<void> {
    const user = new UserModel({
      name,
      username,
      password,
      last_access,
    });
    await user.save();
  }

  async findUserById(_id: string): Promise<IUser> {
    const user = await UserModel.findById(_id);
    return user;
  }

  async findUserByIdAndUpdate({
    _id,
    name,
    username,
    password,
    last_access,
  }: IUpdateUserDTO): Promise<void> {
    await UserModel.findByIdAndUpdate(_id, {
      name,
      username,
      password,
      last_access,
    });
  }

  async deleteUserById(_id: string): Promise<void> {
    await UserModel.findByIdAndDelete(_id);
  }

  async findUserByUsername(username: string): Promise<IUser> {
    const user = await UserModel.findOne({ username });
    return user;
  }
}
export { UsersRepository };
