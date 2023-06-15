const express = require("express");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const originalName = file.originalname;
    const extension = originalName.substring(originalName.lastIndexOf("."));
    const newName = "custom-" + Date.now() + extension;
    cb(null, newName);
  },
});

const upload = multer({ storage: storage });

const app = express();

app.post("/", upload.single("file"), (req, res) => {
  res.json({ message: "File uploaded successfully." });
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
