import { container } from "tsyringe";

import { IUsersRepository } from "../modules/users/repositories/IUsersRepository";
import { UsersRepository } from "../modules/users/repositories/UsersRepository";
import { DateProvider } from "./providers/DateProvider/DateProvider";
import { IDateProvider } from "./providers/DateProvider/IDateProvider";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<IDateProvider>("DateProvider", DateProvider);
