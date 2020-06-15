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
  let total = 27;
  let pages = 0


  while (pages <= total) {
    await page.goto(`https://gatry.com/home/mais_promocoes?qtde=${pages}&onlyPromocao=true`, { waitUntil: 'networkidle0' })
    pages += 9

    let acc = await page.evaluate(() => {
      const books = []
      document.querySelectorAll('.content .promocao')
      .forEach(book => {
        let data = {
          link: book.querySelector('h3 a').getAttribute('href'),
          title: book.querySelector('h3 a').text,
          img: book.querySelector('.imagem a').innerHTML
        }
        books.push(data)
      })
      return books
    })

    result = [...result, ...acc]
  }
  
  browser.close()
  return result
};
scrape().then((value) => {
    console.log(JSON.stringify(value))
})