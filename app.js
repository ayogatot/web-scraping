const express = require("express");
const puppeteer = require("puppeteer");
const app = express();

const PORT = 1234;

app.listen(PORT, () => console.log(`Server running at ${PORT}`));
