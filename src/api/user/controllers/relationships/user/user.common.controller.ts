import { Controller, Get, Param, ParseIntPipe } from "@nestjs/common";
import { User } from "src/api/user/user.entity";
import { UserController } from "../../user.controller";

@Controller("api/v1/user/:id/relationships/user/:related/common")
export class UserListController extends UserController {
  @Get()
  public async common(
    @Param("id", ParseIntPipe) id: number,
    @Param("related", ParseIntPipe) related: number
  ): Promise<User[]> {
    const user: User = await this.repository.findOneOrFail(id);
    const userRelated: User = await this.repository.findOneOrFail(related);

    return this.repository
      .createQueryBuilder()
      .relation(User, "contacts")
      .of([user, userRelated])
      .loadMany();
  }
}
