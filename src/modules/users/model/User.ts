import { model, Schema } from "mongoose";

interface IUser {
  _id?: string;

  name: string;

  username: string;

  password: string;

  last_access: Date;
}

const schemaUser = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    last_access: {
      type: Date,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

const UserModel = model<IUser>("User", schemaUser);

export { IUser, UserModel };
