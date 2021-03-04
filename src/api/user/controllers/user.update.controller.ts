import { Body, Param, ParseIntPipe, Patch } from "@nestjs/common";
import { User } from "../user.entity";
import { UserUpdateValidation } from "../validation/user.update.validation";
import { UserController } from "./user.controller";

export class UserUpdateController extends UserController {
  @Patch(":id")
  public async update(
    @Param("id", ParseIntPipe) id: number,
    @Body() data: UserUpdateValidation
  ): Promise<User> {
    const user: User = await this.repository.findOneOrFail(id);

    await this.repository.update(user, data);

    return user;
  }
}
