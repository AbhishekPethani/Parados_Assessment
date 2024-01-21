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
            if(result != null){
                res.status(200).send({ "result": result });
            }else{
                res.status(404).send({ "result": "No such Collection or Document exist!!" });
            }
        })
        .catch((err) => {
            return res.status(500).json({ error: 'Internal Server Error' });
        });
});
module.exports = router;