import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public users = [];
  public page = null;
  public total_pages = null;

  constructor(private activatedRoute: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit() {
    this.loadData(null);
  }

  loadData(event) {
    this.page = 1;    
    this.apiService.getUsers(this.page).subscribe((result:any) => {  
      this.users = result.data;
      this.total_pages = result.total_pages;
      if(event){
        event.target.complete();
      }      
    })
  }

  loadMoreData(event) {

    this.page++;

    this.apiService.getUsers(this.page).subscribe((result:any) => {  
      this.users = this.users.concat(result.data);
      event.target.complete();
      if (this.page == this.total_pages) {
        event.target.disabled = true;
      }
      console.log('Done');
    })

  }

}
