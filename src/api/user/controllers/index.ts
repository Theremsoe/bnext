import { UserCreateController } from "./user.create.controller";
import { UserDeleteController } from "./user.delete.controller";
import { UserListController } from "./user.list.controller";
import { UserReadController } from "./user.read.controller";
import { UserUpdateController } from "./user.update.controller";

export const UserControllers = [
  UserListController,
  UserCreateController,
  UserReadController,
  UserUpdateController,
  UserDeleteController,
];
