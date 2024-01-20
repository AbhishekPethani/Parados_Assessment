const express = require("express");
const { uploadFileToFirebase, storageDestination, fileToUpload } = require("../utils/firebaseStorageUtils");
const router = express.Router();

router.post("/", (req, res) => {
    uploadFileToFirebase(fileToUpload, storageDestination)
        .then((result) => {
            res.status(201).send({ "result": result });
        })
        .catch((err) => {
            res.status(400).send({ "error": err });
        })
});
module.exports = router;