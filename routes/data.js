const express = require("express");

const router =  express.Router();

const  Data = require('../model/data');



router.post('/',async(req,res)=>{
    console.log(req.body);
    const data = new Data({
        schoolParent:req.body.schoolParent,
        name:req.body.name,
        establishYear:req.body.establishYear,
        approximatlyStudent:req.body.approximatlyStudent,
        brand:req.body.brand,
        email:req.body.email,
        principalName:req.body.principalName,
        levelServiced:req.body.levelServiced,
        address:req.body.address,
        contactPerson1:req.body.contactPerson1,
        contactNumber1:req.body.contactNumber1,
        contactType1:req.body.contactType1,
        contactPerson2:req.body.contactPerson2,
        contactNumber2:req.body.contactNumber2,
        contactType2:req.body.contactType2,
        city:req.body.city,
        Pincode:req.body.Pincode,
        numberClass:req.body.numberClass,
        boardType:req.body.boardType
    });
    try{
        const savedData = await data.save();
        res.json(savedData);
    }catch(err)
    {
        res.json({message:err});
    }
});

module.exports = router;