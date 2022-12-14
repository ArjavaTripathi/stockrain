const functions = require("firebase-functions");
const admin = require("firebase-admin");


admin.initializeApp({
  credential: admin.credential.cert({
    "type": "service_account",
    "project_id": "stockrain-3d18d",
    "private_key_id": "92bb0de07a838c800aa5fb30bcef4be8f38b8695",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDLgxRkFKyepR14\nDHJOAAIgvBciYd37Zn4gnPFWJuYMcH58wagwoBboeT1bY7/25fBUkhxLTGHmee+n\nYczMRuDTK//EjKNPexp8go6bdnMbfpZZcL5PA0JK1lJyvRNTHXVBrAlLSMKspa1C\nWx2cHgqHiiKirxDCME6RSy9ciBmWAF1azsBn1Dn6LKf43iv2m8HqU2iKgbWEmzph\n0pH8ej4M4j+tDHs76AKBWfyrkRWAZQ78cwRhAIK8wF2q2zBCjQNDzwrdIlgSQL3V\nqnYNe+CFVwTA5GlYlInJ2cmACubfkkGgdqmEDy9j7w/lyRGx9SNtgVyAKKx0XtmL\nHcS7Gcw/AgMBAAECggEABF8qpc27OZCNdgHlG1+CVtwDg+Bl/tu1nj4Q1yDFygLz\n90/HrP0Qu5S4fd6XhevBl7zTG8ZRHLzbf5UpFkL4MGvJC5quesDHvGCnme0CTaxl\n+Wzjwa8YZ6LRVEKoiB1hYp7vTNfhdV5SaahVwKqf350sNPdyx4vMcZrpB7aqv19K\ndB1W2QpFC1V8kzY1LUzju2z4j0XZw1m/Lnn6dPTpLV6yn6zIdxWy8z/A9XJCg/1o\ncsIE49QHLDcN/n2eOc2RLk9xfPpMHYrMk9VTU2MKw5n9aNrtWdVdc4yRK1MzMyYH\nmCy9ALL2/UtOfWHfslqH/jwjjCAZmhn2LO9HHfoYfQKBgQD5v1sz5PG9wxdSi25H\nEa599aLXJNNF4GgKvXN25m18CHix2HaoJ2ZzL/ReuLXckbcSYMPEfQAWDL1Q7m1v\nAj79ysGaKOqW1Xo6e+h1i7KbRqFwLYvfQABAuSbszNyMDTHllWUbV1EAu26o0BUI\nQnQbRbGNlxjaHgkFa/5tj6wgHQKBgQDQm2Xq8DWpWmpMuUYAE+uXugJtxdxQVBFE\nZE324ax6zmX6n79ZdBA07DoHUZXbgyKl7m11E4HNp6LhDlO+JNq1Jv1qFMiK/MiN\nW6eLsmwM2ToUMdGL7XlpigsDwSVZZQTKFGczLOZ8cEJfvxycUhhw98/4FFAXR0qn\n3MorZBAnCwKBgCfUkOMR3Ev7VTjg69GBzGZiSnotcVRvmag81rFbxpJFd5pFf4cJ\n4Zj1SO/iXX6z7pKLxC0OEnlxxq+lluZhYVJwh7fiVqd/nGK/aC92/CEvfoe5e9k7\nB89KuB6D/ZiIcjC/RsS5hD2tptRdez05+/Jthweh1WDT8XRf6M/oXfcxAoGANvLo\nGsWhbPWrEICxJq4YncPahe3bhbFPRxOg0cpKM6MQi77umXKQHlCnTGw6LDNTuh+e\n53r28yQYLG4osupkTdlyYTIOTUYe0dV1wb+C5LOHr/AbgV9RXvKEyj1jSDPq2gwb\nzwghwl+TrELcF3UsiP1N48v9+NPHn4XyHxHhi1cCgYEA+UfJzdNNO9vKhu+zr6ug\nwJPWG2r0sHiUnPp+RSCbvVtlI4ozRPusCmqbb47iVEztjAjSae332dKIDMIQolqM\nf3eKCobCQLd9U5fuP/2PemG49exwLQvE6hKobJ/YlMHwY0ydxUfOUL3azqUnAzd1\n6kRg6YHetmyVSlhlezo/de8=\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-4d22l@stockrain-3d18d.iam.gserviceaccount.com",
    "client_id": "112875549536077061310",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-4d22l%40stockrain-3d18d.iam.gserviceaccount.com"
  }),
  databaseURL: "https://stockrain-3d18d-default-rtdb.asia-southeast1.firebasedatabase.app"
});


const firestore = admin.firestore();


exports.test = functions.https.onRequest((req, res) => {
    res.send("Hello from Firebase functions!");

});



exports.testbuy = functions.https.onRequest(async (request, response) => {
    try{
        const docRef = firestore.collection("Stocks").doc("Automobile").collection("BMW").doc("StockRate");
        const doc = await docRef.ref.get();
        if (doc.exists()) {
            res.send(doc.data().rates[0])
        }else {
            console.error('Snapshot is undefined or null');
        }
    }catch (err) {
        console.error(err, 'Could not resolve');
}
});

    
