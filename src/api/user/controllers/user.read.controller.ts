import { Get, Param, ParseIntPipe } from "@nestjs/common";
import { User } from "../user.entity";
import { UserController } from "./user.controller";

export class UserReadController extends UserController {
  @Get(":id")
  public read(@Param("id", ParseIntPipe) id: number): Promise<User> {
    return this.repository.findOneOrFail(id);
  }
}
