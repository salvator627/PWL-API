const express = require('express')
const router = express.Router()
const userModel = require('../models/users')

//routing endpoint users
router.get('/',async(req,res)=>{
    const users = await userModel.findAll()

    console.log(users)

    res.status(200).json({
        data : users,
        metadata : "Testing user"
    })
})

router.post('/', async(req,res)=>{
    const {nip, nama, password} = req.body
    const users = await userModel.create({
        nip,nama,password
    })
    res.status(200).json({
        data : "users",
        metadata : "Testing post endpoint"
    })
})

router.put('/', async(req,res)=>{
    const {nip, nama, password, passwordBaru} = req.body

    const userData = await userModel.findOne({
        where: {nip:nip}
    })

    if(userData.password === password){
        const users = await userModel.update({
            nama, password:passwordBaru
        },{
            where:{nip:nip}
        })

        
    res.status(200).json({
        userData
    })
    } else{
        res.status(400).json({
            error:"data invalid"
        })
    }

    //const users = await userModel.create({
    //    nip,nama,password
    //})
   // res.status(200).json({
   //     data : "users",
   //     metadata : "Testing post endpoint"
    //})
})



module.exports = router