import { Component } from '@angular/core';
import { Widget } from '../shared';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})
export class WidgetsComponent {
  selectedWidget: Widget = {id: null};
  widgets: Array<Widget> = [
    {
      "id": 1,
      "name": "Widget 1",
      "description": "This is a description"
    },
    {
      "id": 2,
      "name": "Widget 2",
      "description": "This is a description!"
    },
    {
      "id": 3,
      "name": "Widget 3",
      "description": "This is a lovely widget"
    }
  ];

  constructor() {}

  resetWidget() {
    let emptyWidget: Widget = {id: null};
    this.selectedWidget = emptyWidget;
  }

  selectWidget(widget: Widget) {
    this.selectedWidget = widget;
  }
}