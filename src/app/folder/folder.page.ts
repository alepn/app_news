import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public items = [
    {
      'featured': 'teste',
      'headline': 'teste'
    },
    {
      'featured': 'teste',
      'headline': 'teste'
    },
    {
      'featured': 'teste',
      'headline': 'teste'
    },
    {
      'featured': 'teste',
      'headline': 'teste'
    }
  ];

  public items2 = [
    {
      'featured': 'teste2',
      'headline': 'teste2'
    },
    {
      'featured': 'teste2',
      'headline': 'teste2'
    },
    {
      'featured': 'teste2',
      'headline': 'teste2'
    },
    {
      'featured': 'teste2',
      'headline': 'teste2'
    }
  ];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  loadData(event) {

    this.items = this.items.concat(this.items2);

    setTimeout(() => {
      console.log('Done');
      event.target.complete();

      if (this.items.length == 8) {
        event.target.disabled = true;
      }
    }, 500);
  }

}
