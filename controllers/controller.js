const router = require("express").Router();

const {Router} = require("express");

//  IMPORT MODEL
const Song = require("../models/Song");

// IMPORT SEED DATA
const songSeed = require("../db/seedData.json");

// ROUTES
// SEED
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

// INDEX
router.get("/", async (Req, res) => {
    try {
      const songs = await Song.find({});
      res.json(songs);
    } catch (error) {
      res.status(400).json(error);
    }
  });

// CREATE 
router.post("/", async (req, res) => {
    try {
      const newSong = await Song.create(req.body);
      res.json(newSong);
    } catch (error) {
      res.status(400).json(error);
    }
  });  

// UPDATE
router.put("/:id", async (req, res) => {
    try {
      const updatedSong = await Song.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.json(updatedSong);
    } catch (error) {
      res.status(400).json(error);
    }
  });

// DELETE
router.delete("/:id", async (req, res) => {
    try {
      const deletedSong = await Song.findByIdAndRemove(req.params.id);
      res.json(deletedSong);
    } catch (error) {
      res.status(400).json(error);
    }
  });

module.exports = router; 