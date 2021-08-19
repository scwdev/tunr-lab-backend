const router = require("express").Router();

const {Router} = require("express");

//  IMPORT MODEL
const Song = require("../models/Song");

// IMPORT SEED DATA
const songSeed = require("../db/seedData.json");

// ROUTES
router.get("/seed", async (req,res) => {
    try {
        await Song.remove({});
        await Song.create(songSeed);
        const songs = await Song.find({});
        res.json(songs);
    } catch (error) {
        res.status(400).json(error);
    }
});

module.exports = router; 