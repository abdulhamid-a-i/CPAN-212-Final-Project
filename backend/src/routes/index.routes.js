import express from "express";
import multer from "multer";

const router = express.Router();

const upload = multer({ storage: multer.memoryStorage() });

router.get("/", async(req,res) =>{
    //Lists books on online store
});

router.post("/cart", async(req, res) =>{
    // adding items to cart
})

router.get("/checkout", async(req, res) =>{
    // navigate to checkout page
})

router.post("/checkout", async(req, res) =>{
    //Making a purchase on checkout page
})