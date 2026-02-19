import express from "express";
import multer from "multer";

router.post("/token", async (req, res) => {
    const valid = await validateLogIn(req);
  res.json(await logIn(req));
});

router.post("/introspect", async(req, res) =>{
    const valid = await validateToken(req);
})

router.post("/revoke", async(req, res) => {
    const valid = await validateLogout(req);
    res.json(await logOut(req));
})