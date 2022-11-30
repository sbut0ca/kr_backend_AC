"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logi = void 0;
const sequelize_1 = require("sequelize");
class Logi extends sequelize_1.Model {
    static initModel(sequelize) {
        return Logi.init({
            idLogi: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            IdUser: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'Users',
                    key: 'id'
                }
            },
            IdDocument: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'Documents',
                    key: 'id'
                }
            },
            IdType: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'LogType',
                    key: 'idLogType'
                }
            }
        }, {
            sequelize,
            tableName: 'Logi',
            timestamps: false,
            indexes: [
                {
                    name: "PRIMARY",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "idLogi" },
                    ]
                },
                {
                    name: "fk_logi_IdUser_idx",
                    using: "BTREE",
                    fields: [
                        { name: "IdUser" },
                    ]
                },
                {
                    name: "fk_logi_IdType_idx",
                    using: "BTREE",
                    fields: [
                        { name: "IdType" },
                    ]
                },
                {
                    name: "fk_logi_IdDocument_idx",
                    using: "BTREE",
                    fields: [
                        { name: "IdDocument" },
                    ]
                },
            ]
        });
    }
}
exports.Logi = Logi;
