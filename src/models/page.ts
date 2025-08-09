import { TPage } from "@custom-types/page";
import mongoose, { Model, Schema } from "mongoose";

const pageSchema: Schema<TPage> = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  allowedRoles: {
    type: [String],
    default: [],
  },
  exceptRoles: {
    type: [String],
    default: [],
  },
});

export const Page: Model<TPage> = mongoose.model<TPage>("pages", pageSchema);
