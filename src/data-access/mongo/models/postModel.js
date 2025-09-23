const mongoose = require("mongoose");

const schema = new mongoose.Schema(
    {   
        title: { type: String, required: true },
        content: { type: String, required: true },
        imageUrl: { type: String, required: false },
        gallery: [{ type: String, required: false }],
        tags: [{ type: String }],
        status: { type: String, required: true },
        author: { name: { type: String }, img: { type: String } },

        // Platformalarga mos formated data
        formatted: {
            telegram: { type: String },
            facebook: { type: String },
            instagram: { type: String },
            website: { type: String },
        },

        // Platformalarga chiqishi
        publishTo: {
            telegram: { type: Boolean, default: false },
            facebook: { type: Boolean, default: false },
            instagram: { type: Boolean, default: false },
            website: { type: Boolean, default: true }
        },

        stats: {
            telegram: {
                views: { type: Number, default: 0 },
                reactions: { type: Number, default: 0 },
                shares: { type: Number, default: 0 },
                comments: { type: Number, default: 0 },
            },
            facebook: {
                views: { type: Number, default: 0 },
                reactions: { type: Number, default: 0 },
                shares: { type: Number, default: 0 },
                comments: { type: Number, default: 0 },
            },
            instagram: {
                views: { type: Number, default: 0 },
                reactions: { type: Number, default: 0 },
                shares: { type: Number, default: 0 },
                comments: { type: Number, default: 0 },
            }
        }
    },
    {
        toJSON: { virtuals: true },
        versionKey: false,
        timestamps: false
    }
);


module.exports = mongoose.model("Post", schema);