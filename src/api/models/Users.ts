import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Logi, LogiId } from './Logi';
import type { Role, RoleId } from './Role';

export interface UsersAttributes {
  id: number;
  FirstName: string;
  SecondName: string;
  LastName?: string;
  Mail: string;
  PhoneNumber: number;
  addres: string;
  Role_id: number;
  Login: string;
  Password: string;
}

export type UsersPk = "id";
export type UsersId = Users[UsersPk];
export type UsersOptionalAttributes = "id" | "LastName";
export type UsersCreationAttributes = Optional<UsersAttributes, UsersOptionalAttributes>;

export class Users extends Model<UsersAttributes, UsersCreationAttributes> implements UsersAttributes {
  id!: number;
  FirstName!: string;
  SecondName!: string;
  LastName?: string;
  Mail!: string;
  PhoneNumber!: number;
  addres!: string;
  Role_id!: number;
  Login!: string;
  Password!: string;

  // Users belongsTo Role via Role_id
  Role!: Role;
  getRole!: Sequelize.BelongsToGetAssociationMixin<Role>;
  setRole!: Sequelize.BelongsToSetAssociationMixin<Role, RoleId>;
  createRole!: Sequelize.BelongsToCreateAssociationMixin<Role>;
  // Users hasMany Logi via IdUser
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

  static initModel(sequelize: Sequelize.Sequelize): typeof Users {
    return Users.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FirstName: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    SecondName: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    LastName: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Mail: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    PhoneNumber: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    addres: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Role_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Role',
        key: 'id'
      }
    },
    Login: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Password: {
      type: DataTypes.STRING(45),
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
