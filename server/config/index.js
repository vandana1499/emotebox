const env = require('dotenv').config();
const path = require('path');

if (env.error) {
    throw new Error("Couldn't find .env file")
}

module.exports = {
    // PORT
    port: parseInt(process.env.PORT, 10) || 4000,

    // API configs
   
    api: {
        prefix: "/api",
        publicURL: process.env.PUBLIC_URL || "http://localhost:3000",
        baseURL: process.env.BASE_URL || "http://localhost:5000",
    },

    // Auth secrets
    authSecret: 'super-secret-code',

    // Discord configs
    discord: {
        clientID: process.env.DISCORD_CLIENT_ID || '749417956903092294',
        clientSecret: process.env.DISCORD_CLIENT_SECRET || 'secret',
        scopes: ['identify', 'guilds'],
        prompt: "consent",
    },

    // MongoDB 
    databaseURL: process.env.MONGODB_URL,

    // AWS
    aws: {
        accessId: process.env.AWS_ACCESS_ID,
        accessKey: process.env.AWS_SECRET_KEY,
        bucketName: process.env.AWS_BUCKET_NAME || "emotebox"
    },

    // Multer
    multerStorage: {
        destination: "uploads/",
        filename: (req, file, cb) => {
            cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
        }
    }
}