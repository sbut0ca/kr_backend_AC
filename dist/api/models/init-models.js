"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initModels = exports.Users = exports.Role = exports.Logi = exports.LogType = exports.Documents = void 0;
const Documents_1 = require("./Documents");
Object.defineProperty(exports, "Documents", { enumerable: true, get: function () { return Documents_1.Documents; } });
const LogType_1 = require("./LogType");
Object.defineProperty(exports, "LogType", { enumerable: true, get: function () { return LogType_1.LogType; } });
const Logi_1 = require("./Logi");
Object.defineProperty(exports, "Logi", { enumerable: true, get: function () { return Logi_1.Logi; } });
const Role_1 = require("./Role");
Object.defineProperty(exports, "Role", { enumerable: true, get: function () { return Role_1.Role; } });
const Users_1 = require("./Users");
Object.defineProperty(exports, "Users", { enumerable: true, get: function () { return Users_1.Users; } });
function initModels(sequelize) {
    const Documents = Documents_1.Documents.initModel(sequelize);
    const LogType = LogType_1.LogType.initModel(sequelize);
    const Logi = Logi_1.Logi.initModel(sequelize);
    const Role = Role_1.Role.initModel(sequelize);
    const Users = Users_1.Users.initModel(sequelize);
    Logi.belongsTo(Documents, { as: "IdDocument_Document", foreignKey: "IdDocument" });
    Documents.hasMany(Logi, { as: "Logis", foreignKey: "IdDocument" });
    Logi.belongsTo(LogType, { as: "IdType_LogType", foreignKey: "IdType" });
    LogType.hasMany(Logi, { as: "Logis", foreignKey: "IdType" });
    Users.belongsTo(Role, { as: "Role", foreignKey: "Role_id" });
    Role.hasMany(Users, { as: "Users", foreignKey: "Role_id" });
    Logi.belongsTo(Users, { as: "IdUser_User", foreignKey: "IdUser" });
    Users.hasMany(Logi, { as: "Logis", foreignKey: "IdUser" });
    return {
        Documents: Documents,
        LogType: LogType,
        Logi: Logi,
        Role: Role,
        Users: Users,
    };
}
exports.initModels = initModels;
