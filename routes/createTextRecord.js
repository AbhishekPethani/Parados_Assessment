const express = require("express");
const router = express.Router();
const { createTextRecordToFirestore } = require('../utils/fireStoreDBUtils');

router.post("/", (req, res) => {
    const { collection, document, data } = req.body;
    
    if (!collection || !document || !data) {
      return res.status(400).json({ error: 'Bad Request. Missing required parameters.' });
    }
    
    createTextRecordToFirestore(collection, document, data)
        .then((result) => {
            res.status(201).send({ "result": result });
        })
        .catch((err) => {
            res.status(500).send({ "error": "Internal Server Error" });
        });
});
module.exports = router;