import { Component, OnInit } from '@angular/core';
import { UniteRouting } from '../../../../uniteServices/routingService';
import { renderMapper } from '../../renderer/renderers.collection';

@Component({
  selector: 'app-layout-one',
  templateUrl: './layout-one.component.html'
})
export class LayoutOneComponent implements OnInit {

  renderMapper = renderMapper;
  uniteMenus;
  constructor(private _routingService: UniteRouting) {
    this.uniteMenus = this._routingService.getAllMenus()
  }

  ngOnInit() {
  }

}
