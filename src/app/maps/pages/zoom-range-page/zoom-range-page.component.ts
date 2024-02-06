import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { LngLat, Map } from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range-page',
  templateUrl: './zoom-range-page.component.html',
  styles: ``,
})
export class ZoomRangePageComponent implements AfterViewInit, OnDestroy {
  @ViewChild('map') divMap?: ElementRef;

  public zoom: number = 10;
  public map?: Map;
  public currentLnglat: LngLat = new LngLat(-74.5, 40);

  ngAfterViewInit(): void {
    if (!this.divMap) throw 'El elemento html no fue encontrado';

    this.map = new Map({
      container: this.divMap?.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currentLnglat, // starting position [lng, lat]
      zoom: this.zoom, // starting zoom
    });

    this.mapListeners();
  }

  ngOnDestroy(): void {
    this.map?.remove();
  }

  mapListeners() {
    if (!this.map) throw 'Mapa no inicializado';

    this.map.on('zoom', () => {
      this.zoom = this.map!.getZoom();
    });

    this.map.on('zoomend', () => {
      if (this.map!.getZoom() < 18) return;
      this.map!.zoomTo(18);
    });

    this.map.on('move', () => {
      this.currentLnglat = this.map!.getCenter();
    });
  }

  zoomIn() {
    // if(this.zoom <= 18){
    //   this.zoom = this.zoom + 1;
    // }
    this.map?.zoomIn();
  }

  zoomOut() {
    // if(this.zoom >= -2){
    //   this.zoom = this.zoom - 1;
    // }

    this.map?.zoomOut();
  }

  zoomChange(value: string) {
    this.zoom = Number(value);
    this.map?.zoomTo(this.zoom);
  }
}
