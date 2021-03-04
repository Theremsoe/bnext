import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserControllers } from "./controllers";
import { User } from "./user.entity";

@Module({
  controllers: [...UserControllers],
  imports: [TypeOrmModule.forFeature([User])],
})
export class UserModule {}
