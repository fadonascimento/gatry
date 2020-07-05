import { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {

  const resultsUrl = 'https://gatry.com/home/mais_promocoes?qtde=0&onlyPromocao=true';
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
  res.status(200).json(promotions)
}


