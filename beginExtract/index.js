//const fetch = require('node-fetch');
const admin = require('firebase-admin');

const serviceAccount = require('./extracto-2eb04-60cbc8a2630f.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
  
const db = admin.firestore();
  

module.exports = async function (context, myTimer) {

    /* fetch('https://app.scrapinghub.com/api/run.json?apikey=5fed10557a124004a04939eb55ef0719',
        {
            body: "project=515196&spider=osfeSintesis",
            headers: { "Content-Type":"application/x-www-form-urlencoded" },
            method:'POST'
        })
    .then((res)=>res.json())
    .then((data) => console.log(data.jobid))
    .catch((err)=> console.log(err))  */

    const docRef = db.collection('Jobs').doc('brubru');

    await docRef.set({
        jobNumber: "Prueba"
    });
};