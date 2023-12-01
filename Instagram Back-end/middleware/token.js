const jwt = require('jsonwebtoken')
const jwtsecret = "123456789"
const mongoose = require('mongoose');
const User = mongoose.model("User")


module.exports = (req, res, next) => {
    const { authorization } = req.headers;
    console.log(authorization);
    if (!authorization) {
        return res.status(401).json({ error: "you must be logged in" });
    }

    //auth=== Bearer (token) so to extract just the token we need to replace the first half
    const token = authorization.replace("Bearer ", "");
    jwt.verify(token, jwtsecret, (err, payload) => {
        if (err) {
            return res.status(401).json({ error: "you must be logged in 2" });
        }
        const { id } = payload;
        User.findById(id).then(userdata => {
            req.user = userdata
            next();
        })
    })
}