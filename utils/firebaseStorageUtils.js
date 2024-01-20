var admin = require('./commons');
var bucket = admin.storage().bucket();

const storageDestination = 'uploads/cat.jpg';
const fileToUpload = './utils/cat.jpg'
const downloadFileName = 'download.jpg';

// 1. Upload any file (can be jpg image) to the Firebase Storage.
async function uploadFileToFirebase(filePath, destination) {
    try {
        await bucket.upload(filePath, {
            destination: destination,
        });
        console.log('File uploaded successfully.');
        return "File uploaded successfully."
    } catch (err) {
        console.log(err);
        return err;
    }
}

// 2. Download a file from the Firebase Storage.
async function downloadFileFromFirebase(destination, localFilePath) {
    try {
        await bucket.file(destination).download({ destination: localFilePath });
        console.log('File downloaded successfully.');
        return "File downloaded successfully."
    } catch (err) {
        console.log(err);
        return err;
    }
}

module.exports = { uploadFileToFirebase, downloadFileFromFirebase, storageDestination, fileToUpload, downloadFileName };