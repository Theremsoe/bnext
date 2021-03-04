import { Body, Post } from "@nestjs/common";
import { User } from "../user.entity";
import { UserCreateValidation } from "../validation/user.create.validation";
import { UserController } from "./user.controller";

export class UserCreateController extends UserController {
  @Post()
  public create(@Body() data: UserCreateValidation): Promise<User> {
    return this.repository.save(data);
  }
}
