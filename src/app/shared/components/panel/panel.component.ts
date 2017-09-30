import { Component, Input } from '@angular/core';

@Component({
  selector: 'dt-panel-actions,dt-panel-content',
  template: '<ng-content></ng-content>',
})
export class PanelChildComponent {

  @Input()
  public title: string;

}

@Component({
  selector: 'dt-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent {

  @Input()
  public title: string;

}
