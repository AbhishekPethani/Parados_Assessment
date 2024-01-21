const express = require("express");
const router = express.Router();
const { createTextRecordToFirestore, firestoreCollection, firestoreDocument } = require('../utils/fireStoreDBUtils');

router.post("/", (req, res) => {
    console.log(req.body);
    const { key, value } = req.body;
    const text = {key, value}
    createTextRecordToFirestore(firestoreCollection, firestoreDocument, {key, value})
        .then((result) => {
            res.status(201).send({ "result": result });
        })
        .catch((err) => {
            res.status(400).send({ "error": err });
        });
});
module.exports = router;