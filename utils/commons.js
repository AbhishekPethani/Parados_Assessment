var admin = require('firebase-admin');

// Fetch the service account key JSON file contents
const serviceAccount = process.env.GOOGLE_SECRET;

// Initialize the app with a service account, granting admin privileges
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: 'parados-assessment.appspot.com',
});

module.exports = admin;