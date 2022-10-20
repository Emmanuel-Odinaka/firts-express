const {jwt, verify} = require("jsonwebtoken");
const config = require('../config/auth');

const verify = (req, res, next) => {
    const token = req.headers["authorization"];

    // check if token exists
    if (!token) {
        return res.status(403).send({
            message: 'Forbidden'
        })
    }

    // if token exists validate
    verify(token, config.secretKey, (err, decoded) => {
        if (err) {
            return res.status(401).send({
                message: "Unauthorized",
            })
        }
        
        req.userId = decoded.id;
    })
}

const jwtAuth = {
    verifyToken
}
module.exports = jwtAuth;