import { AfterViewInit, Component, Input, ElementRef, ViewChild } from '@angular/core';
import { Map, Marker } from 'mapbox-gl';

@Component({
  selector: 'map-mini-map',
  templateUrl: './mini-map.component.html',
  styles: ``,
})
export class MiniMapComponent implements AfterViewInit {
  @ViewChild('map') divMap?: ElementRef;
  @Input() lngLat?: [number, number];

  public map?: Map;


  ngAfterViewInit(): void {
    if (!this.lngLat) throw 'Cant be null';
    if (!this.divMap) throw 'El elemento html no fue encontrado';

    this.map = new Map({
      container: this.divMap?.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.lngLat, // starting position [lng, lat]
      zoom: 15, // starting zoom
      interactive: false
    });

    new Marker().setLngLat(this.lngLat).addTo(this.map)

  }
}
