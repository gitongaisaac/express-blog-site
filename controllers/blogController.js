const Blog = require("../model/blog");

/* blog_index, blog_details, blog_create_get, blog_creat_post, blog_delete */
const blog_index = (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("index", { title: "Home", blogs: result });
    })
    .catch((err) => {
      console.log(err);
    });
};

const blog_details = (req, res) => {
  const id = req.params.id;

  Blog.findById(id)
    .then((result) => {
      res.render("details", { title: "Blog details", blog: result });
    })
    .catch((err) => {
      console.log(err);
    });
};

const blog_create_get = (req, res) => {
  res.render("create", { title: "New Blog" });
};

const blog_create_post = (req, res) => {
  const blog = new Blog(req.body);

  blog.save().then((result) => {
    res.redirect("/blogs");
  });
};

const blog_delete = (req, res) => {
  const id = req.params.id;

  console.log(id);

  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/blogs" });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  blog_index,
  blog_details,
  blog_create_get,
  blog_create_post,
  blog_delete,
};
