"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Documents = void 0;
const sequelize_1 = require("sequelize");
class Documents extends sequelize_1.Model {
    static initModel(sequelize) {
        return Documents.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            DocumentType: {
                type: sequelize_1.DataTypes.STRING(45),
                allowNull: false
            },
            DocumentCode: {
                type: sequelize_1.DataTypes.STRING(45),
                allowNull: false
            },
            DocumentName: {
                type: sequelize_1.DataTypes.STRING(45),
                allowNull: false
            },
            DocumentDataType: {
                type: sequelize_1.DataTypes.STRING(45),
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'Documents',
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
            ]
        });
    }
}
exports.Documents = Documents;
