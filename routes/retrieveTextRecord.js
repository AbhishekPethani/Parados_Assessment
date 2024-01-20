const express = require("express");
const { retrieveTextRecordFromFirestore, firestoreCollection, firestoreDocument } = require("../utils/fireStoreDBUtils");
const router = express.Router();

router.get("/", (req, res) => {
    retrieveTextRecordFromFirestore(firestoreCollection, firestoreDocument)
        .then((result) => {
            res.status(201).send({ "result": result });
        })
        .catch((err) => {
            res.status(400).send({ "error": err });
        });
});
module.exports = router;