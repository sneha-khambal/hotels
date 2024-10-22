const express = require('express');
const router = express.Router();

const Person = require('../models/person')

 

router.post('/',async (req,res)=>{
    try {
     const data = req.body;
     const newperson = new Person(data);
   
     const response = await newperson.save();
     console.log('data saved to db');
     console.log(response)
     res.status(200).json(response)
    } catch (error) {
     console.log(error)
     res.status(500).json(error);
    }
   
   });
   
   router.get('/',async(req,res)=>{
     try {
       const getPerson = await Person.find();
       res.status(200).json(getPerson )
     } catch (error) {
       res.status(500).json(error )  }
   })
   router.get('/:workType',async(req,res)=>{
     try {
       const workType = req.params.workType;
       if(workType == 'chief'||workType == 'manager' || workType == 'waiter'){
         const getPerson = await Person.find({work:workType});
         res.status(200).json(getPerson )
       }else{
         res.status(404 ).json('invalid worktype' )
       }
       
     } catch (error) {
       res.status(500).json(error ) 
      }
   });

   router.put('/:id',async(req,res)=>{
try {
  const personId = req.params.id;
  const updatePerson = req.body;
  const response = await Person.findByIdAndUpdate(personId,updatePerson,{
    new:true,
    runValidator:true
  });
console.log('Perso updated successfully.')
  res.status(200).json(response)
} catch (error) {
  res.status(500).json(error ) 

}

   });

   router.delete('/:id',async(req,res)=>{
    try{
    const personId = req.params.id;
    const response = await Person.findByIdAndDelete(personId);
    console.log(response);
    
      if(!response)res.status(200).json('no record with this Id present to delete')
      else res.status(200).json('person deleted successfully.')
    } catch (error) {
      res.status(500).json(error)
    
    }
   })

   module.exports = router;