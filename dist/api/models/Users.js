"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
const sequelize_1 = require("sequelize");
class Users extends sequelize_1.Model {
    static initModel(sequelize) {
        return Users.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            FirstName: {
                type: sequelize_1.DataTypes.STRING(45),
                allowNull: false
            },
            SecondName: {
                type: sequelize_1.DataTypes.STRING(45),
                allowNull: false
            },
            LastName: {
                type: sequelize_1.DataTypes.STRING(45),
                allowNull: true
            },
            Mail: {
                type: sequelize_1.DataTypes.STRING(45),
                allowNull: false
            },
            PhoneNumber: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false
            },
            addres: {
                type: sequelize_1.DataTypes.STRING(45),
                allowNull: false
            },
            Role_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'Role',
                    key: 'id'
                }
            },
            Login: {
                type: sequelize_1.DataTypes.STRING(45),
                allowNull: false
            },
            Password: {
                type: sequelize_1.DataTypes.STRING(45),
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'Users',
            timestamps: false,
            indexes: [
                {
                    name: "PRIMARY",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "id" },
                    ]
                },
                {
                    name: "fk_Users_Role_idx",
                    using: "BTREE",
                    fields: [
                        { name: "Role_id" },
                    ]
                },
            ]
        });
    }
}
exports.Users = Users;
