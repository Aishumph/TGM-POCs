import { Component, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TGM';
  @ViewChild(MatMenuTrigger)
  contextMenu!: MatMenuTrigger;

  contextMenuPosition = { x: '0px', y: '0px' };

  onContextMenu(event: MouseEvent) {
    event.preventDefault();
    this.contextMenuPosition.x = event.clientX + 'px';
    this.contextMenuPosition.y = event.clientY + 'px';
    this.contextMenu.menu?.focusFirstItem('mouse');
    this.contextMenu.menu?.focusFirstItem('mouse');
    this.contextMenu.openMenu();
  }

  onContextMenuAction1() {
    alert(`Click on Action 1 for `);
  }

  onContextMenuAction2() {
    alert(`Click on Action 2 for `);
  }
}

export interface Item {
  id: number;
  name: string;
}

