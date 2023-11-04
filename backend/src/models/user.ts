import { Table, Model, Column, DataType, HasMany, Default } from "sequelize-typescript";
import { Message } from "./message";

@Table({
  timestamps: false,
  tableName: "users",
})
export class User extends Model<User> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @Default(new Date())
  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  datetime!: Date;

  @HasMany(() => Message)
  messages?: Message[];
}