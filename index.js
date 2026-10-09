import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

let pageTitle = "Matt Kilpatrick";

let navLinks = [
  { text: "Home", href: "/" },
  { text: "Projects", href: "#projects" },
  { text: "Professional Experience", href: "#experience" },
  { text: "Certification & Education", href: "#education" },
];

let indexPageData = {
  pageTitle: pageTitle,
  navLinks: navLinks,
};

app.get("/", (req, res) => {
  res.render("index.ejs", indexPageData);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
