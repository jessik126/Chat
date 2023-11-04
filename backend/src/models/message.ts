import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
  timestamps: false,
  tableName: "messages",
})
export class Message extends Model<Message> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  user!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  text!: string;

  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  datetime!: Date;
}