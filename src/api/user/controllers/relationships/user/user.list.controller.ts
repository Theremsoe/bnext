import { Controller, Get, Param, ParseIntPipe } from "@nestjs/common";
import { User } from "src/api/user/user.entity";
import { UserController } from "../../user.controller";

@Controller("api/v1/user/:id/relationships/user")
export class UserListController extends UserController {
  @Get()
  public async list(@Param("id", ParseIntPipe) id: number): Promise<User[]> {
    const user: User = await this.repository.findOneOrFail(id);

    return this.repository
      .createQueryBuilder()
      .relation(User, "contacts")
      .of(user)
      .loadMany();
  }
}
