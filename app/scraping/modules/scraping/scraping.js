const jsdom = require("jsdom");
const fetch = require("node-fetch");
// const puppeteer = require('puppeteer')


const { JSDOM } = jsdom;

class GatryScraping {

  constructor() {
  }
  static base_path = 'https://gatry.com/home';

  async getUpdates() {
    let output = null;
    try{
      const response = await fetch(GatryScraping.base_path + '/bullets?data=2020-06-16+18:00:00');
      output = await response.json();
    }
    catch(e) {
      console.log(e);
    }
    return output;
  }

  async getResults(){

    const resultsUrl = GatryScraping.base_path + '/mais_promocoes?qtde=0&onlyPromocao=true';
    const dom = await JSDOM.fromURL(resultsUrl);
    const document = dom.window.document;
    const elements = document.querySelectorAll(".promocao");
    const promotions = [...elements].map(promotion => {
      return {
        "link": promotion.querySelector('.link_loja').attributes['href'].value.trim(),
        "title": promotion.querySelector('h3').textContent.trim(),
        "image": promotion.querySelector('.imagem img').attributes['src'].value.trim(),
        "price": promotion.querySelector('.preco').textContent.trim(),
        "storeName": promotion.querySelector('.link_loja').childNodes[1].textContent.trim(),
        "date": promotion.querySelector('.data_postado').attributes['title'].value.trim(),
        "commentPreview": promotion.querySelector('.comentario') && promotion.querySelector('.comentario').textContent.trim(),
        "user": {
          "id": promotion.querySelector('.usuario a').attributes['href'].value.trim().replace('/user/detalhe/', ''),
          "name": promotion.querySelector('.usuario img').attributes['title'].value.trim(),
          "image": promotion.querySelector('.imagem img').attributes['src'].value.trim()
        }
      }
    });
    return {
      results: promotions,
      url: resultsUrl
    };

  }
}

exports.GatryScraping = GatryScraping;
