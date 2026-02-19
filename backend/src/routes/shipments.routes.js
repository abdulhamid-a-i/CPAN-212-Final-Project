import express from "express";
import multer from "multer";
//Import necessay methods once complete

const router = express.Router();

const upload = multer({ storage: multer.memoryStorage() });


router.get("/", async (req, res) => {
  res.json(await listAll());
});

router.get("/:id", async (req, res) =>{
    const shipment = await findById(req.params.id);
    if (!shipment) return res.status(404).json({error: "Shipment not found"});
    res.json(shipment);
});

router.post("/", async (req, res) => {
    const result = await validateCreateShipment(req.body);
    if (!result.ok){
        return res.status(400).json({error: result.errors})
    }

    const shipment = await createShipment(result.value);
    res.status(201).json(shipment);
})



router.patch("/:id/qty", async (req, res) => {
  // bulk upload after processed to add quantity to books
});

export default router;