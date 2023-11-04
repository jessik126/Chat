import { Table, Model, Column, DataType, ForeignKey, BelongsTo, Default } from "sequelize-typescript";
import { User } from "./user";

@Table({
  timestamps: false,
  tableName: "messages",
})
export class Message extends Model<Message> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  text!: string;

  @Default(new Date())
  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  datetime!: Date;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  userId!: number;

  @BelongsTo(() => User)
  user!: User;
}