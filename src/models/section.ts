import { Model, Schema } from "mongoose";

const sectionSchema = new Schema({
  pageId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  label: {
    type: String,
  },
  type: {
    type: String,
    enum: ["form", "table", "data_preview"],
    default: "data_preview",
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

export const Section = new Model("sections", sectionSchema);
