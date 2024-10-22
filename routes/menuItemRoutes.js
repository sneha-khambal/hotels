const express = require('express');
const router = express.Router();

const MenuItem = require('../models/menuItems')




router.post('/',async(req,res)=>{
    try {
      const reqData = req.body;
      const menuItemData = new MenuItem(reqData);
      const response = await menuItemData.save();
      console.log('menu item saved to db');
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  });
  
  router.get('/',async(req,res)=>{
  
    try {
      const getMenu =  await MenuItem.find();
  res.status(200).json(getMenu)
    } catch (error) {
      res.status(500).json(500)
    }
  })

  router.get('/:taste',async(req,res)=>{
  
    try {
        const reqTaste = req.params.taste;
        if(reqTaste == 'sweet' || reqTaste == 'sour' || reqTaste == 'spicy'){
            const getMenu =  await MenuItem.find({taste:reqTaste});
            res.status(200).json(getMenu)
        }else{
            res.status(404).json('invalid taste search')
        }

    } catch (error) {
      res.status(500).json(error)
    }
  });

  router.put('/:id',async(req,res)=>{

   try {
    const menuId = req.params.id;
    const updateMenu = req.body;
    const response = await MenuItem.findByIdAndUpdate(menuId,updateMenu,{
      new:true,
      runValidators:true
    });

    console.log('menu updated succefully.');
    res.status(200).json(response)
   } catch (error) {
    res.status(500).json(error)

   }
  });
  
router.delete('/:id',async(req,res)=>{
try {
  const deleteId = req.params.id;
  const response = await MenuItem.findByIdAndDelete(deleteId);
console.log(response);

  if(!response)res.status(200).json('no record with this Id present to delete')
  else res.status(200).json('Menu deleted successfully.')
} catch (error) {
  res.status(500).json(error)

}
})
  module.exports = router;