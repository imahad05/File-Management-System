const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  fs.readdir(`./files`, (err, files) => {
    if (err) return console.log(err.message);
    res.render("index", { files: files });
  });
});

app.post("/create", (req, res) => {
  fs.writeFile(
    `./files/${req.body.title.split(" ").join("")}.txt`,
    req.body.details,
    (err) => {
      if (err) return console.log(err.message);
      res.redirect("/");
    }
  );
});

app.get("/file/:filename", (req, res) => {
  fs.readFile(`./files/${req.params.filename}`, "utf-8", (err, fileData) => {
    if (err) return console.log(err.message);
    res.render("show", {
      filename: req.params.filename.toLocaleLowerCase(),
      fileData: fileData,
    });
  });
});

app.get("/edit/:filename", (req, res) => {
  const { filename } = req.params;
  res.render("edit", { prevName: filename });
});

app.post("/edit", (req, res) => {
  const prevFilePath = path.join(__dirname, "files", req.body.prevName);
  const newFilePath = path.join(__dirname, "files", req.body.newName);

  fs.rename(prevFilePath, newFilePath, (err) => {
    if (err) {
      console.log("Error:", err.message);
      return res.status(500).send("File rename failed");
    }
    res.redirect("/");
  });
});


const port = 4000 || 3001
app.listen(port, () => {
  console.log(`Server Running On This Port : http://localhost:${port}`);
});
