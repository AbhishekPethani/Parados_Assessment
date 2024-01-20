const express = require("express");
const router = express.Router();
const { createTextRecordToFirestore, firestoreCollection, firestoreDocument } = require('../utils/fireStoreDBUtils');

router.post("/", (req, res) => {
    const textData = { text: 'Hello, Firebase!' };
    createTextRecordToFirestore(firestoreCollection, firestoreDocument, textData)
        .then((result) => {
            res.status(201).send({ "result": result });
        })
        .catch((err) => {
            res.status(400).send({ "error": err });
        });
});
module.exports = router;