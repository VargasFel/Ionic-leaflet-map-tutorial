import { Component, OnInit } from '@angular/core';
import { Map, tileLayer, LeafletMouseEvent } from 'leaflet';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pickup-location',
  templateUrl: './pickup-location.page.html',
  styleUrls: ['./pickup-location.page.scss'],
})

export class PickupLocationPage implements OnInit {
  map!: Map;
  address: string = ''; // Adicione esta linha para corrigir o erro

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
    this.initializeMap();
  }

  initializeMap() {
    const initialCoords: [number, number] = [17.3850, 78.4867];
    const initialZoom = 13;
    // Latitude e longitude 
    this.map = new Map('map').setView(initialCoords, initialZoom);

    const tileLayerUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    const tileLayerOptions = {
      attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
      maxZoom: 18,
    };
  
    // Crie um elemento div
    const mapContainer = document.createElement('div');

  // Defina a altura do mapa aqui
  // Adicione um ID e estilo ao elemento
  mapContainer.id = 'map-container';
  mapContainer.style.height = '500px'; // Ajuste a altura conforme necessário

    // Obtenha o elemento ion-content
    const ionContent = document.querySelector('ion-content');

    // Verifique se o elemento ion-content existe antes de anexar
    if (ionContent) {
      ionContent.appendChild(mapContainer);
    }

    this.map.getContainer().style.width = '100%'; // ou qualquer largura desejada
    tileLayer(tileLayerUrl, tileLayerOptions).addTo(this.map);
  }
  

  goBack() {
    this.navCtrl.back();
  }

  locatePosition() {
    console.log('Locating position...');
    // Lógica para localização de posição, se necessário.
  }

  confirmPickupLocation() {
    console.log('Confirming pickup location...');
    // Lógica para confirmar a localização de coleta, se necessário.
  }
}
