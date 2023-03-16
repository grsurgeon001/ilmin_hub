import mongoose from "mongoose";

const modelSchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true, maxLength: 80 },
    meta: {
        views: { type: Number, default: 0, required: true },
    },
});

const Model = mongoose.model("Model", modelSchema);

export default Model;