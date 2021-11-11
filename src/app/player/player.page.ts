import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.page.html',
  styleUrls: ['./player.page.scss'],
})
export class PlayerPage implements OnInit {

  public imageDefault = './assets/img/radio_logo.png'
  public nombreRadio = 'Nombre de radio'

  constructor(public dataService: DataService) { }

  ngOnInit() {
    if (this.dataService.radioActual) {
      this.nombreRadio = this.dataService.radioActual.nombre
    }
  }

  playRadio(radio) {
    this.dataService.playRadio(radio)
  }

  stop() {
    this.dataService.stop()
  }

}
