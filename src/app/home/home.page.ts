import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public dataService: DataService, private router: Router) {
    this.dataService.getListaRadio().subscribe(res => {
      this.dataService.radios = res
    })
  }

  playRadio(radio) {
    this.router.navigate(['player'])
    this.dataService.playRadio(radio)
  }

  stop() {
    this.dataService.stop()
  }

  goToPlayer() {
    this.router.navigate(['player'])
  }

}
