import { Model, Schema } from "mongoose";

const fieldSchema = new Schema({
  sectionId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  key: {
    type: String,
    required: true,
  },
  type: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
  },
  defaultValue: {
    type: String,
  },
  defaultValues: {
    type: [String],
  },
  requireValidation: {
    type: Boolean,
    default: false,
  },
  validationRules: {
    type: JSON,
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

export const Field = new Model("fields", fieldSchema);
