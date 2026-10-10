import express from "express";
import bodyParser from "body-parser";
import fs from 'fs/promises'; // Use const fs = require('fs').promises; for CommonJS
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// Recreate __dirname if using ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function loadProjectJson() {
  try {
    // Construct absolute path relative to the current file
    const filePath = path.join(__dirname, '/public/data/data.json'); 
    
    const rawData = await fs.readFile(filePath, 'utf8');
    const jsonData = JSON.parse(rawData);
    
    return jsonData;
  } catch (error) {
    console.error('Error reading JSON file:', error);
  }
}

let pageData = await loadProjectJson();

console.log(pageData);

app.get("/", (req, res) => {
  res.render("index.ejs", pageData);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
