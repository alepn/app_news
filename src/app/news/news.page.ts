import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  public news = []
  private page

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.page = 1
    this.apiService.getNews().subscribe((result:any) => {  
      this.news = result.news
    })    
  }

}
