import puppeteer from 'puppeteer-core';

async function run() {
  console.log('Launching headless Chrome...');
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();

  page.on('console', msg => {
    console.log(`[PAGE LOG - ${msg.type()}]: ${msg.text()}`);
  });

  page.on('pageerror', err => {
    console.error('*** [PAGE RUNTIME EXCEPTION] ***:', err.toString());
  });

  page.on('requestfailed', request => {
    console.log(`[REQUEST FAILED]: ${request.url()} - ${request.failure()?.errorText || 'Unknown error'}`);
  });

  console.log('Navigating to local server http://localhost:5173/ ...');
  try {
    await page.goto('http://localhost:5173/', { waitUntil: 'networkidle2', timeout: 15000 });
    console.log('Navigation finished.');
  } catch (err) {
    console.error('Navigation timed out or failed:', err.message);
  }

  const html = await page.content();
  console.log('\n--- PAGE ROOT ELEMENT HTML ---');
  const rootHtml = await page.evaluate(() => {
    const root = document.getElementById('root');
    return root ? root.innerHTML : 'Root element not found';
  });
  console.log(rootHtml);
  console.log('------------------------------\n');

  console.log('Closing browser...');
  await browser.close();
}

run().catch(err => {
  console.error('Script failed:', err);
});
