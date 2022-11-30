import type { Sequelize } from "sequelize";
import { Documents as _Documents } from "./Documents";
import type { DocumentsAttributes, DocumentsCreationAttributes } from "./Documents";
import { LogType as _LogType } from "./LogType";
import type { LogTypeAttributes, LogTypeCreationAttributes } from "./LogType";
import { Logi as _Logi } from "./Logi";
import type { LogiAttributes, LogiCreationAttributes } from "./Logi";
import { Role as _Role } from "./Role";
import type { RoleAttributes, RoleCreationAttributes } from "./Role";
import { Users as _Users } from "./Users";
import type { UsersAttributes, UsersCreationAttributes } from "./Users";

export {
  _Documents as Documents,
  _LogType as LogType,
  _Logi as Logi,
  _Role as Role,
  _Users as Users,
};

export type {
  DocumentsAttributes,
  DocumentsCreationAttributes,
  LogTypeAttributes,
  LogTypeCreationAttributes,
  LogiAttributes,
  LogiCreationAttributes,
  RoleAttributes,
  RoleCreationAttributes,
  UsersAttributes,
  UsersCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const Documents = _Documents.initModel(sequelize);
  const LogType = _LogType.initModel(sequelize);
  const Logi = _Logi.initModel(sequelize);
  const Role = _Role.initModel(sequelize);
  const Users = _Users.initModel(sequelize);

  Logi.belongsTo(Documents, { as: "IdDocument_Document", foreignKey: "IdDocument"});
  Documents.hasMany(Logi, { as: "Logis", foreignKey: "IdDocument"});
  Logi.belongsTo(LogType, { as: "IdType_LogType", foreignKey: "IdType"});
  LogType.hasMany(Logi, { as: "Logis", foreignKey: "IdType"});
  Users.belongsTo(Role, { as: "Role", foreignKey: "Role_id"});
  Role.hasMany(Users, { as: "Users", foreignKey: "Role_id"});
  Logi.belongsTo(Users, { as: "IdUser_User", foreignKey: "IdUser"});
  Users.hasMany(Logi, { as: "Logis", foreignKey: "IdUser"});

  return {
    Documents: Documents,
    LogType: LogType,
    Logi: Logi,
    Role: Role,
    Users: Users,
  };
}
