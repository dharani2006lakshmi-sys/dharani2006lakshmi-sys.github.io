const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1584, height: 396 },
    deviceScaleFactor: 2 // High retina resolution
  });

  const fileUrl = 'file:///' + path.resolve(__dirname, 'banner-template.html').replace(/\\/g, '/');
  await page.goto(fileUrl, { waitUntil: 'networkidle' });
  
  // Wait extra 500ms for fonts to settle
  await page.waitForTimeout(600);

  const outputPath = path.resolve(__dirname, 'linkedin-banner.png');
  await page.screenshot({ path: outputPath, clip: { x: 0, y: 0, width: 1584, height: 396 } });

  console.log('Banner successfully rendered to:', outputPath);
  await browser.close();
})();
