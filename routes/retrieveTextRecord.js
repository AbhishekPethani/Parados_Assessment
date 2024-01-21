const express = require("express");
const { retrieveTextRecordFromFirestore } = require("../utils/fireStoreDBUtils");
const router = express.Router();

router.get("/:collection/:document", (req, res) => {
    const { collection, document } = req.params;

    if (!collection || !document) {
        return res.status(400).json({ error: 'Bad Request. Missing required parameters.' });
    }
    retrieveTextRecordFromFirestore(collection, document)
        .then((result) => {
            res.status(200).send({ "result": result });
        })
        .catch((err) => {
            return res.status(500).json({ error: 'Internal Server Error' });
        });
});
module.exports = router;