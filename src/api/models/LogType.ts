import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Logi, LogiId } from './Logi';

export interface LogTypeAttributes {
  idLogType: number;
  Type: string;
}

export type LogTypePk = "idLogType";
export type LogTypeId = LogType[LogTypePk];
export type LogTypeOptionalAttributes = "idLogType";
export type LogTypeCreationAttributes = Optional<LogTypeAttributes, LogTypeOptionalAttributes>;

export class LogType extends Model<LogTypeAttributes, LogTypeCreationAttributes> implements LogTypeAttributes {
  idLogType!: number;
  Type!: string;

  // LogType hasMany Logi via IdType
  Logis!: Logi[];
  getLogis!: Sequelize.HasManyGetAssociationsMixin<Logi>;
  setLogis!: Sequelize.HasManySetAssociationsMixin<Logi, LogiId>;
  addLogi!: Sequelize.HasManyAddAssociationMixin<Logi, LogiId>;
  addLogis!: Sequelize.HasManyAddAssociationsMixin<Logi, LogiId>;
  createLogi!: Sequelize.HasManyCreateAssociationMixin<Logi>;
  removeLogi!: Sequelize.HasManyRemoveAssociationMixin<Logi, LogiId>;
  removeLogis!: Sequelize.HasManyRemoveAssociationsMixin<Logi, LogiId>;
  hasLogi!: Sequelize.HasManyHasAssociationMixin<Logi, LogiId>;
  hasLogis!: Sequelize.HasManyHasAssociationsMixin<Logi, LogiId>;
  countLogis!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof LogType {
    return LogType.init({
    idLogType: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Type: {
      type: DataTypes.STRING(45),
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
