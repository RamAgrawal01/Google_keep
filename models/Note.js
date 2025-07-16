import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    content: {
        type: String,
        required: true,
    },
    color: {
    type: String,
    default: '#ffffff'
  },
}, { timestamps: true })

export const Note = mongoose.model("Note", noteSchema);