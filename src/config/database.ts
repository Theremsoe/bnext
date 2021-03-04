import { User } from "../api/user/user.entity";
import { config } from "dotenv";

if (process.env.DB === undefined) {
  config();
}

export default {
  type: (process.env.DB || "mysql") as any,
  host: process.env.DB_HOST || "127.0.0.1",
  port: process.env.DB_PORT || 3306,
  username: process.env.DB_USERNAME || "forge",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_DATABASE || "forge",
  entities: [User],
  synchronize: false,
  logging: true,
  migrationsRun: true,
  migrationsTableName: "MIGRATION",
  migrations: ["src/database/migrations/*.ts"],
  cli: {
    migrationsDir: "src/database/migrations",
  },
};
