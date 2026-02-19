import express from "express";
import multer from "multer";
//Import necessay methods once complete

const router = express.Router();

const upload = multer({ storage: multer.memoryStorage() });


router.get("/", async (req, res) => {
  res.json(await listAll());
});

router.get("/:id", async (req, res) =>{
    const book = await findById(req.params.id);
    if (!book) return res.status(404).json({error: "Book not found"});
    res.json(book);
});

router.post("/", async (req, res) => {
    const result = await validateCreateBook(req.body);
    if (!result.ok){
        return res.status(400).json({error: result.errors})
    }

    const book = await createBook(result.value);
    res.status(201).json(book);
})

router.post("/", async(req, res) =>{
    // add shipment
})



router.patch("/:id/qty", async (req, res) => {
  const book = await findById(req.params.id);
  if (!book) return res.status(404).json({ error: "Book not found" });

  const check = validateQtyChange(book.qty, req.body.qty);
  if (!check.ok) return res.status(400).json({ error: check.error });

  const updated = await updateStatus(book.id, check.qty);
  res.json(updated);
});

router.post("/bulk-upload", upload.single("file"), async (req, res) => {
// bulk upload of books using csv file.
});

export default router;


















