import DataAccess = require("./../DataAccess");
import IUserModel = require("./../../models/interfaces/UserModel");

let mongoose = DataAccess.mongooseInstance;
let mongooseConnection = DataAccess.mongooseConnection;

class UserSchema {
    static get schema() {
        let schema = mongoose.Schema({
            firstName: { type: String, default: "" },
            lastName: { type: String },
            displayName: { type: String },
            email: { type: String, required: true },
            password: { type: String },
            provider: { type: String },
            salt: { type: String }
        });

        return schema;
    }
}

let schema = mongooseConnection.model<IUserModel>("Users", UserSchema.schema);

export = schema;