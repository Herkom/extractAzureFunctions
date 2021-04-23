const fetch = require('node-fetch');
const admin = require('firebase-admin');

const serviceAccount = require('./extracto-2eb04-60cbc8a2630f.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
  
const db = admin.firestore();
const FieldValue = admin.firestore.FieldValue;

  
module.exports = async function (context, myTimer) {
    context.log('Function triggered')

    fetch('https://app.scrapinghub.com/api/run.json?apikey=5fed10557a124004a04939eb55ef0719',
        {
            body: "project=515196&spider=osfeSintesis",
            headers: { "Content-Type":"application/x-www-form-urlencoded" },
            method:'POST'
        })
    .then((res)=>res.json())
    .then(async(data) => {
        const firebaseRes = await db.collection('Jobs').add({
            jobNumber: data.jobid,
            timestamp: FieldValue.serverTimestamp(),
        });
    })
    .catch((err)=> console.log(err));

    context.done();
};