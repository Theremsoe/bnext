import { Controller } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "../user.entity";

@Controller("api/v1/user")
export class UserController {
  constructor(
    @InjectRepository(User) protected readonly repository: Repository<User>
  ) {}
}
