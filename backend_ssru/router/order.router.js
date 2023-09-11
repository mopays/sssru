const router = require('express').Router();
const { verifyToken ,verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken")
const Order = require("../models/order.models");

//CREATE
router.post("/" ,  async(req, res) =>{
     const newOrder = new Order(req.body);

     try{
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder);
     }catch(err){
        res.status(500).json(err)
     }
})

//UPDATE
router.put("/:id", verifyTokenAndAdmin, async(req, res) =>{
    try{
        const updatedOrder = await Order.findByIdAndUpdate(
            req.params.id,{
                $set: req.body,
            },
            {new: true}
        );
        res.status(200).json(updatedOrder);
    }catch(err){
        res.status(500).json(err)
    }
})

//DELETE 
router.delete("/:id", verifyTokenAndAdmin, async(req, res) =>{
    try{
        await Order.findByidAndDelete(req.params.id);
        res.status(200).json("Delete  order successfully");
    }catch(err){   
        res.status(500).json(err)
    }
})

//GET USER ORDER
router.get("/find/:userId", verifyTokenAndAuthorization, async(req, res) =>{
    try{
            const orders = Order.find({ userId: req.params.userId});
            res.status(200).json(orders);
    }catch(err){    
        res.status(500).json(err)
    }
})


//GET ALL 
router.get("/", verifyTokenAndAuthorization, async(req, res) =>{
    try{
        const orders = await Order.find();
        res.status(200).json(orders);
    }catch(err){    
        res.status(500).json(err)
    }
})

//GET MONEY INCOME 
router.get("/income", verifyTokenAndAdmin, async(req,res) =>{
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

    try{
        const income  = await Order.aggregate([
            {$match: {createdAt:{ $gte: lastYear}}},
            {
                $project:{
                    month: { $month: "$createdAt" },
                },
            },
            {
                $group:{
                    _id: "$month",
                    total: { $sum: 1 },
                },
            },
        ]);
        res.status(200).json(income)
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router;