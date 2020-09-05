import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-news',
  templateUrl: './modal-news.page.html',
  styleUrls: ['./modal-news.page.scss'],
})
export class ModalNewsPage implements OnInit {

  @Input() title: string;
  @Input() detail: string;
  @Input() modalController: ModalController;

  constructor() { }

  ngOnInit() {
  }

  dismissModal(){
    this.modalController.dismiss();
  }

}
