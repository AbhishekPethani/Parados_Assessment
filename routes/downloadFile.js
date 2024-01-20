const express = require("express");
const { downloadFileFromFirebase, storageDestination, downloadFileName } = require("../utils/firebaseStorageUtils");
const router = express.Router();

router.get("/", (req, res) => {
    downloadFileFromFirebase(storageDestination, downloadFileName)
        .then((result) => {
            res.status(201).send({ "result": result });
        })
        .catch((err) => {
            res.status(400).send({ "error": err });
        })
});
module.exports = router;