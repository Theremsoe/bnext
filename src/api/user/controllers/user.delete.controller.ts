import { Delete, Param, ParseIntPipe } from "@nestjs/common";
import { User } from "../user.entity";
import { UserController } from "./user.controller";

export class UserDeleteController extends UserController {
  @Delete(":id")
  public async delete(@Param("id", ParseIntPipe) id: number): Promise<User> {
    const user: User = await this.repository.findOneOrFail(id);

    this.repository.delete(user);

    return user;
  }
}
