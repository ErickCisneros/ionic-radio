import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  radios: any[] = []
  file: HTMLAudioElement = null;
  radioActual = null;

  constructor(private httpClient: HttpClient) { }

  getListaRadio() {
    return this.httpClient.get<any[]>('/assets/data/lista.json')
  }

  playRadio(radio) {
    if (this.radioActual) {
      this.stop()
    }
    this.radioActual = radio
    this.file = new Audio(this.radioActual.datosurl)
    this.file.play()
  }

  stop() {
    if (this.radioActual) {
      this.radioActual = null
      this.file.pause()
      this.file = null
    }
  }
}
