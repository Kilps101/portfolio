import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

let pageTitle = "Matt Kilpatrick";

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

let indexPageData = {
  pageTitle: pageTitle,
};

app.get("/", (req, res) => {
  res.render("index.ejs", indexPageData);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
