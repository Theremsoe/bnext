import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity({ name: "USER" })
export class User {
  @PrimaryGeneratedColumn("increment")
  public id: number;

  @Column()
  public name: string;

  @Column()
  public lastName: string;

  @Column()
  public phone: string;

  @ManyToMany(() => User)
  @JoinTable({ name: "USER_RELATED" })
  contacts: User[];
}
