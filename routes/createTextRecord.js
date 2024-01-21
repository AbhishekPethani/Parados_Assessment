const express = require("express");
const router = express.Router();
const { createTextRecordToFirestore } = require('../utils/fireStoreDBUtils');

router.post("/", (req, res) => {
    const { collection, document, text } = req.body;
    
    if (!collection || !document || !text) {
      return res.status(400).json({ error: 'Bad Request. Missing required parameters.' });
    }
    
    createTextRecordToFirestore(collection, document, data)
        .then((result) => {
            res.status(201).send({ "result": result });
        })
        .catch((err) => {
            res.status(400).send({ "error": err });
        });
});
module.exports = router;