const HistoryController = require("../controllers/historyController");
const router = require("express").Router();

router.get("/", HistoryController.historyGet);
module.exports = router;
