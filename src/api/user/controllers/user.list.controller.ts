import { Get, Query } from "@nestjs/common";
import { paginate, Pagination } from "nestjs-typeorm-paginate";
import { User } from "../user.entity";
import { UserController } from "./user.controller";

export class UserListController extends UserController {
  @Get()
  public paginate(
    @Query("page") page = 1,
    @Query("limit") limit = 15
  ): Promise<Pagination<User>> {
    return paginate<User>(this.repository, { page, limit });
  }
}
