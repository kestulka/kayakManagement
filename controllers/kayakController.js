const Kayak = require("../models/Kayak");

module.exports = {
  getAllKayaks,
  getKayakById,
  createKayak,
  updateKayak,
  deleteKayak,
};

async function getAllKayaks(req, res) {
  try {
    const kayaks = await Kayak.find();
    res.josn(kayaks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function getKayakById(req, res) {
  try {
    const { kayakId } = req.params;
    const kayak = await Kayak.findById(kayakId);
    if (!client) {
      return res.status(404).json({ message: "Client not found" });
    }
    res.json(kayak);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function createKayak(req, res) {
  try {
    const kayak = await Kayak.create(req.body);
    res.status(201).json(kayak);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function updateKayak(req, res) {
  try {
    const { kayakId } = req.params;
    const updatedKayak = await Kayak.findByIdAndUpdate(kayakId, req.body, {
      new: true,
    });
    if (!updatedKayak) {
      res.status(404).json({ message: "Kayak not found" });
      return;
    }
    res.json(updatedKayak);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function deleteKayak(req, res) {
  try {
    const { kayakId } = req.params;
    const deletedKayak = await Kayak.findByIdAndDelete(kayakId);
    if (!deletedKayak) {
      res.status(404).json({ message: "Kayak not found" });
      return;
    }
    res.json({ message: "Kayak deleted sucessfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
