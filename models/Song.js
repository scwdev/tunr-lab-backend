const mongoose = require("mongoose");

const { Schema, model } = mongoose

const songSchema = new Schema(
    {
        title: String,
        artist: String,
        album: String,
        time: Number,
        url: String
    },
    {timestamps: true}
)

const Song = model("Song", songSchema)

module.exports = Song