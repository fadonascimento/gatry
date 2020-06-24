// const puppeteer = require('puppeteer');
// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto('http://books.toscrape.com/');
//   await page.screenshot({path: 'exemplo1.png'});
// await browser.close();
// })();

const puppeteer = require('puppeteer')
let scrape = async () => {
  const browser = await puppeteer.launch({ headless: true })
  const page = await browser.newPage()
  let result = []
  let total = 18;
  let pages = 0


  while (pages <= total) {
    await page.goto(`https://gatry.com/home/mais_promocoes?qtde=${pages}&onlyPromocao=true`, { waitUntil: 'networkidle0' })
    pages += 9

    let acc = await page.evaluate(() => {
      const items = []
      document.querySelectorAll('.content .promocao')
      .forEach(item => {
        let data = {
          id: item.getAttribute('id').replace(/\D+/g, ""),
          link: item.querySelector('h3 a').getAttribute('href'),
          title: item.querySelector('h3 a').text,
          img: {
            uri: item.querySelector('.imagem img').getAttribute('src'),
          } 
          price: {
            currency: item.querySelector('[itemprop="priceCurrency"]')?.innerHTML,
            value: item.querySelector('[itemprop="price"]')?.innerHTML
          }
        }
        items.push(data)
      })
      return items
    })

    result = [...result, ...acc]
  }
  
  browser.close()
  return result
};
scrape().then((value) => {
    console.log(JSON.stringify(value))
})