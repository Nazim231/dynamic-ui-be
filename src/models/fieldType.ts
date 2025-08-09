import {Model, Schema} from "mongoose"

const fieldTypeSchema = new Schema({
    type: {
        type: String,
        required: true,
    },
    validationRules: {
        type: JSON
    }
})

export const FieldType = new Model('fieldTypes', fieldTypeSchema)