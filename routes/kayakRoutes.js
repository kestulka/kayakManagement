const express = require("express");
const router = express.Router();
const kayakController = require("../controllers/kayakController");

router.get("/", kayakController.getAllKayaks);
router.get("/:kayakId", kayakController.getKayakById);
router.post("/", kayakController.createKayak);
router.put("/:kayakId", kayakController.updateKayak);
router.delete("/:kayakId", kayakController.deleteKayak);

module.exports = router;
