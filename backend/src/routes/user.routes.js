import express from "express";
import multer from "multer";
//Import necessay methods once complete

const router = express.Router();

const upload = multer({ storage: multer.memoryStorage() });

router.get("/users", async(req, res) => {
    //lists users
});

router.get("/users/:id", async(req, res) =>{
    //Get specific user's details
});

router.post("/users/user", async(req, res) => {
    //Create user
});

router.patch("/users/:id", async(req,res) =>{
    //Update user details
});

router.delete("/users/user", async(req,res) =>{
    //Deletes user
})


