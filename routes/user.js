
const express = require('express')
const router = express.Router();
const jwt = require('jsonwebtoken');

router.post('/register',async(req,res) => {
    res.json({
        "message" : "This method is not ready yet"
    })
});
router.post('/login',async (req,res) => {
    res.json({
        "message" : "This method is not ready yet"
    })   
    
});
router.post('/update',async (req,res) => {
    res.json({
        "message" : "This method is not ready yet"
    })


});
router.get('/logout',async (req,res) => {

    res.json({
        "message" : "This method is not ready yet"
    })

});



module.exports=router;