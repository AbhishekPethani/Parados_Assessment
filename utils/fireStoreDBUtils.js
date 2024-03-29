var admin = require('./commons');
var db = admin.firestore();

// 3. Create a text record in the Firestore Database.
async function createTextRecordToFirestore(collection, document, data) {
    try {
        const collectionRef = db.collection(collection).doc(document);
        const res = await collectionRef.set(data, { merge: true });
        console.log('Text record created successfully.');
        return "Text record created successfully.";
    } catch (error) {
        return error;
    }
}

// 4. Retrieve the record from the Firestore Database and print/show the text.
async function retrieveTextRecordFromFirestore(collection, document) {
    const docRef = db.collection(collection).doc(document);
    const docSnapshot = await docRef.get();

    if (docSnapshot.exists) {
        const data = docSnapshot.data();
        return data;
    } else {
        console.log('Document not found.');
        return null;
    }
}

module.exports = { retrieveTextRecordFromFirestore, createTextRecordToFirestore };