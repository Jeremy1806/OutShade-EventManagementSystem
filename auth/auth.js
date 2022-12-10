const jwt = require('jsonwebtoken');


function auth (req,res,next) {

    const token = req.header('x-auth-token');
    if(!token) return res.status(401).send('Access denied. No token provided.');
    try{
        const payload  = jwt.verify(token,'secret123');
        req.user = payload;
        next();
    }
    catch(err)
    {
        console.log(err);
        res.status(401).send('Invalid Token');
    }
    
}

module.exports = auth;