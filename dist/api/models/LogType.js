"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogType = void 0;
const sequelize_1 = require("sequelize");
class LogType extends sequelize_1.Model {
    static initModel(sequelize) {
        return LogType.init({
            idLogType: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            Type: {
                type: sequelize_1.DataTypes.STRING(45),
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'LogType',
            timestamps: false,
            indexes: [
                {
                    name: "PRIMARY",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "idLogType" },
                    ]
                },
            ]
        });
    }
}
exports.LogType = LogType;
