import {
  getMongoRepository,
  MongoRepository,
  getMongoManager,
  MongoEntityManager,
  ObjectID,
} from "typeorm";

import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../entities/User";
import { IUsersRepository } from "./IUsersRepository";

class UsersRepository implements IUsersRepository {
  private repository: MongoRepository<User>;
  private manager: MongoEntityManager;
  constructor() {
    // this.repository = getMongoRepository(User);
    this.manager = getMongoManager();
  }

  async create({
    name,
    nickname,
    password,
    last_access,
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      nickname,
      password,
      last_access,
    });
    await this.repository.save(user);
  }

  async findUserById(_id: string): Promise<User> {
    const user = await this.manager.findOne(User, { _id });
    return user;
  }
}
export { UsersRepository };
