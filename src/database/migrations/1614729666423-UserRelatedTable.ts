import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class UserRelatedTable1614729666423 implements MigrationInterface {
  public readonly name: string = "UserRelatedTable1614729666423";

  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createTable(
      new Table({
        name: "USER_RELATED",
        columns: [
          {
            name: "userId",
            type: "bigint",
            unsigned: true,
            isPrimary: true,
          },
          {
            name: "userRelatedId",
            type: "bigint",
            unsigned: true,
            isPrimary: true,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable("USER_RELATED", true);
  }
}
