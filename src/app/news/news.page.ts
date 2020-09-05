import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ModalController } from '@ionic/angular';
import { ModalNewsPage } from '../modal-news/modal-news.page';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  public news = []
  private page

  constructor(private apiService: ApiService, private modalController: ModalController) { }

  ngOnInit() {
    this.page = 1
    this.apiService.getNews().subscribe((result:any) => {  
      this.news = result.news
    })    
  }

  async presentModal(n) {
    const modal = await this.modalController.create({
      component: ModalNewsPage,
      componentProps: {
        'title': n.headline,
        'detail': n.kicker,
        'modalController': this.modalController
      }
    });
    return await modal.present();
  }

}
