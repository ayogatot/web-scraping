# Simple Scraping using Puppeteer

## Install Puppeteer

you can install using `npm` :

```sh
npm install puppeteer --save
```

or using `yarn` :

```sh
yarn add puppeteer
```

## Folder Structure

```sh
.
+ ss_images
| +-- folder_image.png
+ app.js
+ package.json
```

## Taking Screenshot (Example 1)

1. Make a function

```javascript
const getScreenshot = async websiteName => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const imageName = websiteName.split(/[https://]/gi)[8] + ".png";
  await page.goto(websiteName);
  await page.screenshot({ path: `./ss_image/${imageName}` });

  await browser.close();
};
```

2. Add to out endpoint

```javascript
app.get("/scraping", (req, res) => {
  const webName = req.query.web;
  getScreenshot(webName).then(() => {
    res.status(200).json({
      message: "Screenshot has been saved"
    });
  });
});
```

3. Run

You can just open terminal and then type `node app.js`. At the browser :

```browser
http://localhost:1234/scraping?web=https://medium.com/search?q=node%20js
```
