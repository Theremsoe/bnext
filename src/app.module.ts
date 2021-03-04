import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserModule } from "./api/user/user.module";
import db from "./config/database";

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      ...db,
      keepConnectionAlive: true,
      autoLoadEntities: true,
    }),
    UserModule,
  ],
})
export class AppModule {}
