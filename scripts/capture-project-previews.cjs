const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const sites = [
  ['easypark.png','https://easypark.ccsblock2.com/'],
  ['notebookms.png','https://notebookms.ccsblock2.com/'],
  ['contactless.png','https://airuxph.github.io/contactless/'],
  ['project101.png','https://airuxph.github.io/project101/']
];
(async () => {
  const dir = path.join(__dirname, '..', 'images', 'project-previews');
  fs.mkdirSync(dir, {recursive:true});
  const browser = await chromium.launch({headless:true});
  for(const [file,url] of sites) {
    const page = await browser.newPage({viewport:{width:1280,height:720},deviceScaleFactor:1});
    try {
      const response = await page.goto(url,{waitUntil:'domcontentloaded',timeout:30000});
      if (!response || response.status() >= 400) throw new Error('HTTP '+(response?.status() ?? 'unknown'));
      await page.waitForTimeout(2500);
      await page.screenshot({path:path.join(dir,file),fullPage:false,animations:'disabled'});
      console.log('Captured',file);
    } catch(err) {
      console.warn('Skipped',url,err.message);
    } finally { await page.close(); }
  }
  await browser.close();
})().catch(err => {console.error(err);process.exitCode=1;});
