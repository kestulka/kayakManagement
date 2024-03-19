const express = require("express");
const router = express.Router();

const {
  getAllKayaks,
  getKayakById,
  createKayak,
  updateKayak,
  deleteKayak,
} = require("../controllers/kayakController");

router.get("/", getAllKayaks);
router.get("/:kayakId", getKayakById);
router.post("/", createKayak);
router.put("/:kayakId", updateKayak);
router.delete("/:kayakId", deleteKayak);

module.exports = router;
