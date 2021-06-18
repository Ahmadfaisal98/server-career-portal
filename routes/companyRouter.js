const CompanyController = require("../controllers/companyController");
const router = require("express").Router();
const { authorizationAdmin } = require("../middlewares/auth");
const toImageKit = require("../middlewares/toImageKit");

const multer = require("multer");
const upload = multer();

router.get("/", CompanyController.companyGet);
router.get("/:id", CompanyController.companyGetOne);
router.post("/", upload.single("companyLogo"), toImageKit, CompanyController.companyPost);

router.use("/:id", authorizationAdmin);

router.put("/:id", upload.single("companyLogo"), toImageKit, CompanyController.companyPut);
router.delete("/:id", CompanyController.companyDelete);

module.exports = router;
