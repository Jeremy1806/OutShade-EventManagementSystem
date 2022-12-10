
const express = require('express')

const router = express.Router();

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const {User} = require('../models/db')



router.post('/register',async(req,res) => {
    if (!req.body.email) {
        return res.status(401).json({
          status: "failed",
          message: "did not provide email",
        });
      }
    
      if (!req.body.password) {
        return res.status(401).json({
          status: "failed",
          message: "did not provide password",
        });
      }
      
      try{
        const usercheck = await User.findByPk(req.body.email);
        if(usercheck){
            return res.json({"success" : false , "message" : "User with this email already registered"});
        }
      }
      catch(error){
        console.log(error)
      }

      const hashedPassword = await bcrypt.hash(req.body.password, 12);
    
      try {
        const newUser = await User.create({
          email: req.body.email,
          password: hashedPassword,
        });
  

      }
      catch (error) {
        console.error(error);
        }
        email = req.body.email
        const token =   jwt.sign({ email }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN,
                });
    res.cookie('token',token,{expiresIn:'1hr'})

    return res.header('x-auth-token',token).json({status:'ok', user:token,message:'successfull registration and login'});

});

router.post('/login',async (req,res) => {
    // const { email, password } = req.body;

    // if (!email || !password) {

    //   return res.status(401).json({
    //     status: "failed",
    //     message: "did not provide password or email",
    //   });
    // }

    // try {
    //   const user = await User.findByPk(email);
  
    //   if (!user || !(await bcrypt.compare(password, user.password))) {
    //     return res.status(401).json({
    //       status: "failed",
    //       message: "incorrect email or password",
    //     });
    //   }
  
    // createSendToken(user, 200, res);
    // } catch (error) {
    //   console.error(error);
    // }
    
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