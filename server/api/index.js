const { Router } = require("express");
const test = require("./routes/test");
const auth = require("./routes/auth"); 
const emote = require("./routes/emote");
const pack = require("./routes/pack");

module.exports = () => {
    const app = Router();
    test(app);
    auth(app);
    emote(app);
    pack(app);
    
    return app;
}