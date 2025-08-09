import { Model, Schema } from "mongoose";

const pageSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    slug: {
        type: String,
        required: true,
        unique: true,
    },
    allowedRoles: {
        type: [String],
        default: []
    },
    exceptRoles: {
        type: [String],
        default: []
    }
})

export const Page = new Model('pages', pageSchema)