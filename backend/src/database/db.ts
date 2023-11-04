import { Sequelize, DataType } from "sequelize-typescript";

import { User } from "../models/user";
import { Message } from "../models/message";

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
  });

sequelize.addModels([User, Message]);

export default sequelize;