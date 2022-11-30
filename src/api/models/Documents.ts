import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Logi, LogiId } from './Logi';

export interface DocumentsAttributes {
  id: number;
  DocumentType: string;
  DocumentCode: string;
  DocumentName: string;
  DocumentDataType: string;
}

export type DocumentsPk = "id";
export type DocumentsId = Documents[DocumentsPk];
export type DocumentsOptionalAttributes = "id";
export type DocumentsCreationAttributes = Optional<DocumentsAttributes, DocumentsOptionalAttributes>;

export class Documents extends Model<DocumentsAttributes, DocumentsCreationAttributes> implements DocumentsAttributes {
  id!: number;
  DocumentType!: string;
  DocumentCode!: string;
  DocumentName!: string;
  DocumentDataType!: string;

  // Documents hasMany Logi via IdDocument
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

  static initModel(sequelize: Sequelize.Sequelize): typeof Documents {
    return Documents.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    DocumentType: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    DocumentCode: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    DocumentName: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    DocumentDataType: {
      type: DataTypes.STRING(45),
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
