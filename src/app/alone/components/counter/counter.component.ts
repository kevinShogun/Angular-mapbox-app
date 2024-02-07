import { Component, Input } from '@angular/core';

@Component({
  selector: 'counter-alone',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styles: ``
})
export class CounterComponent {
  @Input()
  public counter = 10;
}
