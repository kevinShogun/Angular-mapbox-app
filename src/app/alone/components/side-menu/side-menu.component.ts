import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface MenuItem{
  name: string;
  route: string;
  icon?: string;
}

@Component({
  standalone: true,
  selector: 'side-menu',
  imports: [RouterModule, CommonModule],
  templateUrl: './side-menu.component.html',
  styles: ``
})
export class SideMenuComponent {

  public menuItems: MenuItem[] = [
    { route: '/maps/fullscreen', name: 'Full Screen', icon: 'bx bx-fullscreen'},
    { route: '/maps/markers', name: 'Markers', icon: 'bx bx-radio-circle-marked'},
    { route: '/maps/properties', name: 'Properties', icon: 'bx  bx-building-house'},
    { route: '/maps/zoom-range', name: 'Zoom', icon: 'bx  bx-zoom-in'},
    { route: '/alone', name: 'Alone', icon: 'bx bx-file-blank'},
  ]
}
