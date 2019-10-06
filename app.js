const express = require("express");
const puppeteer = require("puppeteer");
const app = express();

const PORT = 1234;

const getScreenshot = async websiteName => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const imageName = websiteName.split(/[https://]/gi)[8] + ".png";
  console.log(imageName);
  await page.goto(websiteName);
  await page.screenshot({ path: `./ss_image/${imageName}` });

  await browser.close();
};

app.get("/scraping", (req, res) => {
  const webName = req.query.web;
  getScreenshot(webName).then(() => {
    res.status(200).json({
      message: "Screenshot has been saved"
    });
  });
});

app.listen(PORT, () => console.log(`Server running at ${PORT}`));
