import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Documents, DocumentsId } from './Documents';
import type { LogType, LogTypeId } from './LogType';
import type { Users, UsersId } from './Users';

export interface LogiAttributes {
  idLogi: number;
  IdUser: number;
  IdDocument: number;
  IdType: number;
}

export type LogiPk = "idLogi";
export type LogiId = Logi[LogiPk];
export type LogiOptionalAttributes = "idLogi";
export type LogiCreationAttributes = Optional<LogiAttributes, LogiOptionalAttributes>;

export class Logi extends Model<LogiAttributes, LogiCreationAttributes> implements LogiAttributes {
  idLogi!: number;
  IdUser!: number;
  IdDocument!: number;
  IdType!: number;

  // Logi belongsTo Documents via IdDocument
  IdDocument_Document!: Documents;
  getIdDocument_Document!: Sequelize.BelongsToGetAssociationMixin<Documents>;
  setIdDocument_Document!: Sequelize.BelongsToSetAssociationMixin<Documents, DocumentsId>;
  createIdDocument_Document!: Sequelize.BelongsToCreateAssociationMixin<Documents>;
  // Logi belongsTo LogType via IdType
  IdType_LogType!: LogType;
  getIdType_LogType!: Sequelize.BelongsToGetAssociationMixin<LogType>;
  setIdType_LogType!: Sequelize.BelongsToSetAssociationMixin<LogType, LogTypeId>;
  createIdType_LogType!: Sequelize.BelongsToCreateAssociationMixin<LogType>;
  // Logi belongsTo Users via IdUser
  IdUser_User!: Users;
  getIdUser_User!: Sequelize.BelongsToGetAssociationMixin<Users>;
  setIdUser_User!: Sequelize.BelongsToSetAssociationMixin<Users, UsersId>;
  createIdUser_User!: Sequelize.BelongsToCreateAssociationMixin<Users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Logi {
    return Logi.init({
    idLogi: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    IdUser: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    IdDocument: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Documents',
        key: 'id'
      }
    },
    IdType: {
      type: DataTypes.INTEGER,
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
