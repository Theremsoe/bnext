import { Body, Controller, Param, ParseIntPipe, Post } from "@nestjs/common";
import { User } from "src/api/user/user.entity";
import { UserCreateValidation } from "src/api/user/validation/user.create.validation";
import { UserController } from "../../user.controller";

@Controller("api/v1/user/:id/relationships/user")
export class UserControllerCreate extends UserController {
  @Post()
  public async create(
    @Param("id", ParseIntPipe) id: number,
    @Body() data: UserCreateValidation[]
  ): Promise<User[]> {
    const user: User = await this.repository.findOneOrFail(id);

    const relateds: User[] = await Promise.all(
      data.map((related) => this.repository.create(related))
    );

    this.repository
      .createQueryBuilder()
      .relation(User, "contacts")
      .of(user)
      .add(relateds);

    return relateds;
  }
}
