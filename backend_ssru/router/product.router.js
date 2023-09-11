const router = require('express').Router();
const { verifyToken ,verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken")
const Product = require("../models/product.models");

//CREATE 
router.post("/", verifyTokenAndAdmin, async (req, res) =>{
    const newProduct = new Product( req.body);
    try{
        const saveproduct = await newProduct.save();
        res.status(200).json(saveproduct);
    }catch(err){
        res.status(500).json(err);
    }
})

//UPDATE
router.put("/:id",verifyTokenAndAdmin, async (req,res) =>{
  try{
    const updateproduct = await Product.findByIdAndUpdate(
        req.params.id,{
            $set: req.body,
        },{
            new: true,
        }
    );
    res.status(200).json(updateproduct);
  }catch(err){
    res.status(500).json(err)
  }
})



// DELEETE


router.delete("/:id" , verifyTokenAndAdmin,async( req, res) =>{
   try{
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been delete")
   }catch(err){
    res.status(400).json(err);
   }
})

//GET Product
router.get("/find/:id" , async( req, res) =>{
    try{
       const product = await Product.findById(req.params.id);
       res.status(200).json(product);
    }catch(err){
        res.status(500).json(err)
    }
})

//GET ALL Product
router.get("/", async (req, res) => {
    const qNew = req.query.new;
    const qCategory = req.query.category;
    try {
        let products;
        if(qNew){
            products = qNew.Product.find().sort({ createAt: -1 }).limit(1);
        }else if(qCategory){
            products = await Product.find({
                category:{
                    $in: [qCategory],
                },
            });
        }else{
            products = await Product.find(); 
        }
        res.status(200).json(products);
      
    } catch (err) {
      res.status(500).json(err);
    }
  });
  



module.exports = router;