import { Sequelize, DataTypes } from "sequelize";
import db from "../DB/db.js";

const User = db.define('users', {
    id: {
        type: DataTypes.BIGINT(11),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    username: DataTypes.STRING(45),
    email: DataTypes.STRING(45),
    password: DataTypes.STRING(45)
},
{
    timestamps: false,
    updatedAt: false,
    createdAt: false
});

export default await User.sync()