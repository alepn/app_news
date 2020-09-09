import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

  public todo = {
    title: '',
    description: ''
  };

  constructor() { }

  ngOnInit() {
  }

  public submitForm(){
    console.log(this.todo);
  }

}
