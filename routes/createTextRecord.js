const express = require("express");
const router = express.Router();
const { createTextRecordToFirestore, firestoreCollection, firestoreDocument } = require('../utils/fireStoreDBUtils');

router.post("/", (req, res) => {
    console.log(req.body);
    const key = req.body.key;
    const value = req.body.value;
    console.log(key, value);
    const textData = {key : value}
    createTextRecordToFirestore(firestoreCollection, firestoreDocument, textData)
        .then((result) => {
            res.status(201).send({ "result": result });
        })
        .catch((err) => {
            res.status(400).send({ "error": err });
        });
});
module.exports = router;