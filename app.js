/* Project dependacies */
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogRoutes");

/* Express app */
const app = express();

/* View engine */
app.set("view engine", "ejs");

/* Middleware */
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

/* MongoDb */
const passWord = encodeURIComponent("#@1zzy!!!");
const URI = `mongodb+srv://izzy:${passWord}@node.30ga7wd.mongodb.net/blog-site?retryWrites=true&w=majority`;

/* MongoDb Connection */
mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });

/* Other Routes */
app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

/* Blog Routes */
app.use("/blogs", blogRoutes);

/* Not Found Routes */
app.use((req, res) => {
  res.status(404).render("404", { title: "Not Found" });
});
