import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  public news = []

  constructor() { }

  ngOnInit() {
    this.news = [
      {
       'img': 'https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/cars-subcontent/segmento-carros/02-images/onix-premier.png?imwidth=960',
       'title': 'Notícia 1',
       'subtitle': 'Notícia 1',
       'description': 'Veja mais detalhes...',
      },
      {
        'img': 'https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/cars-subcontent/segmento-carros/02-images/cruze-premier.png?imwidth=960',
        'title': 'Notícia 2',
        'subtitle': 'Notícia 2',
        'description': 'Veja mais detalhes...',
      },
      {
        'img': 'https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/cars-subcontent/segmento-carros/02-images/cruze-premier.png?imwidth=960',
        'title': 'Notícia 2',
        'subtitle': 'Notícia 2',
        'description': 'Veja mais detalhes...',
      }
    ]
  }

}
