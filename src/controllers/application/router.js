const express = require("express");
const controllers = require("./");
const expressCb = require("../../adapters/express-callback");
const Upload = require("../../adapters/Upload");

const postApplication = expressCb(controllers.postApplication);
const getApplications = expressCb(controllers.getApplications);
const getApplication = expressCb(controllers.getApplication);
const getApp = expressCb(controllers.getApp);
const deleteApplication = expressCb(controllers.deleteApplication, { checkRoles: ["admin"] });
const patchApplication = expressCb(controllers.patchApplication, );
// { checkRoles: ["admin"] }
const router = express.Router();

router.post("/application",  Upload.fields([{ name: "passportImage", maxCount: 2 }]), postApplication);
router.get("/application", getApplications);
router.get("/app", getApp);
router.get("/application/:id", getApplication);
router.patch("/application/:id", patchApplication);
router.delete("/application/:id", deleteApplication);

module.exports = router;
