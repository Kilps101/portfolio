import express from "express";
import bodyParser from "body-parser";
import fs from "fs/promises"; // Use const fs = require('fs').promises; for CommonJS
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// Recreate __dirname if using ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function loadJsonData(jsonFileName) {
  try {
    // Construct absolute path relative to the current file
    const filePath = path.join(__dirname, `/public/data/${jsonFileName}`);

    const rawData = await fs.readFile(filePath, "utf8");
    const jsonData = JSON.parse(rawData);

    return jsonData;
  } catch (error) {
    console.error("Error reading JSON file:", error);
  }
}

app.get("/", async (req, res) => {
  res.render("index.ejs", await loadJsonData("index.json"));
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
