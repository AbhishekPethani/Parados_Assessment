const express = require("express");
const router = express.Router();
const { createTextRecordToFirestore, firestoreCollection, firestoreDocument } = require('../utils/fireStoreDBUtils');

router.post("/", (req, res) => {
    console.log(req.body);
    const k = req.body.key;
    const v = req.body.value;
    console.log(k, v);
    createTextRecordToFirestore(firestoreCollection, firestoreDocument, { k: v })
        .then((result) => {
            res.status(201).send({ "result": result });
        })
        .catch((err) => {
            res.status(400).send({ "error": err });
        });
});
module.exports = router;