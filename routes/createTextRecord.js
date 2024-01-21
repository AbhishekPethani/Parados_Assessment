const express = require("express");
const router = express.Router();
const { createTextRecordToFirestore, firestoreCollection, firestoreDocument } = require('../utils/fireStoreDBUtils');

router.post("/", (req, res) => {
    console.log(req.body);
    const firestoreCollection = req.body.collection;
    const firestoreDocument = req.body.document;
    const data = req.body.data;
    createTextRecordToFirestore(firestoreCollection, firestoreDocument, data)
        .then((result) => {
            res.status(201).send({ "result": result });
        })
        .catch((err) => {
            res.status(400).send({ "error": err });
        });
});
module.exports = router;