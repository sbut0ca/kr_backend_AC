import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Users, UsersId } from './Users';

export interface RoleAttributes {
  id: number;
  Role: string;
}

export type RolePk = "id";
export type RoleId = Role[RolePk];
export type RoleOptionalAttributes = "id";
export type RoleCreationAttributes = Optional<RoleAttributes, RoleOptionalAttributes>;

export class Role extends Model<RoleAttributes, RoleCreationAttributes> implements RoleAttributes {
  id!: number;
  Role!: string;

  // Role hasMany Users via Role_id
  Users!: Users[];
  getUsers!: Sequelize.HasManyGetAssociationsMixin<Users>;
  setUsers!: Sequelize.HasManySetAssociationsMixin<Users, UsersId>;
  addUser!: Sequelize.HasManyAddAssociationMixin<Users, UsersId>;
  addUsers!: Sequelize.HasManyAddAssociationsMixin<Users, UsersId>;
  createUser!: Sequelize.HasManyCreateAssociationMixin<Users>;
  removeUser!: Sequelize.HasManyRemoveAssociationMixin<Users, UsersId>;
  removeUsers!: Sequelize.HasManyRemoveAssociationsMixin<Users, UsersId>;
  hasUser!: Sequelize.HasManyHasAssociationMixin<Users, UsersId>;
  hasUsers!: Sequelize.HasManyHasAssociationsMixin<Users, UsersId>;
  countUsers!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof Role {
    return Role.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Role: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Role',
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
