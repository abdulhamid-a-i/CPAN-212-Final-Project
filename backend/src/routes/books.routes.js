import express from "express";
import multer from "multer";
//Import necessay methods once complete

const router = express.Router();

const upload = multer({ storage: multer.memoryStorage() });


router.get("/books", async (req, res) => {
  res.json(await listAll());
});

router.get("/books/:id", async (req, res) =>{
    const book = await findById(req.params.id);
    if (!book) return res.status(404).json({error: "Book not found"});
    res.json(book);
});

router.post("/books", async (req, res) => {
    const result = await validateCreateBook(req.body);
    if (!result.ok){
        return res.status(400).json({error: result.errors})
    }

    const book = await createBook(result.value);
    res.status(201).json(book);
})

router.patch("/books/:id/qty", async (req, res) => {
  const book = await findById(req.params.id);
  if (!book) return res.status(404).json({ error: "Book not found" });

  const check = validateQtyChange(book.qty, req.body.qty);
  if (!check.ok) return res.status(400).json({ error: check.error });

  const updated = await updateStatus(book.id, check.qty);
  res.json(updated);
});

router.post("/books/bulk-upload", upload.single("file"), async (req, res) => {
// bulk upload of books using csv file.
});

router.delete("/books/:id", async (req,res) => {
    // Delete book route
})

export default router;


















