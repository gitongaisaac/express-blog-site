/* Project dependacies */
const express = require("express");
const morgan = require("morgan");

/* Express app */
const app = express();

/* View engine */
app.set("view engine", "ejs");

/* Middleware */
app.use(express.static("public"));
app.use(morgan("dev"));

/* Listen */
app.listen(3000);

const blogs = [
  {
    id: 1,
    title: "May's Party",
    snippet: "Come and have a good time.",
    body: "The best party will ever attend.",
  },
  {
    id: 1,
    title: "Mountain Hike",
    snippet: "Ready to be exhausted and wasted.",
    body: "This will be a bike mountain hike. Fun is at the top of the list. ",
  },
  {
    id: 1,
    title: "Stock seminar",
    snippet: "For those of you who love investing.",
    body: "This is an investing class form nube to pro by the end of the class.",
  },
];

app.get("/", (req, res) => {
  res.render("index", { title: "Home", blogs: blogs });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/create", (req, res) => {
  res.render("create", { title: "New Blog" });
});

app.use((req, res) => {
  res.status(404).render("404", { title: "Not Found" });
});
