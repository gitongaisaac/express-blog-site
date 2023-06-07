/* Project Dependencies */
const express = require("express");
const blogController = require("../controllers/blogController");
/* Express Router */
const route = express.Router();

/* Routes */
route.get("/", blogController.blog_index);

route.post("/", blogController.blog_create_post);

route.get("/details/:id", blogController.blog_details);

route.delete("/details/:id", blogController.blog_delete);

route.get("/create", blogController.blog_create_get);

/* Export route */
module.exports = route;
