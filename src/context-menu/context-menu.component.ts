import { Component, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.scss']
})
export class ContextMenuComponent {
  displayedColumns: string[] = ['airline','Departure',  'Arrival', 'Itinerary'];
  dataSource = ELEMENT_DATA;



  @ViewChild(MatMenuTrigger)
  contextMenu!: MatMenuTrigger;

  contextMenuPosition = { x: '0px', y: '0px' };
  clickevent(event : any){console.log("clickevent" , event);
  }


  onContextMenu(event: MouseEvent, item:element ) {
    event.preventDefault();
    console.log("event",event,item);

    this.contextMenuPosition.x = event.clientX + 'px';
    this.contextMenuPosition.y = event.clientY + 'px';
    this.contextMenu.menuData = { 'item': item };
    this.contextMenu.menu?.focusFirstItem('mouse');
    this.contextMenu.openMenu();
  }

  onContextMenuAction1(item: element) {
    alert(`AIRLINE : ${item.airline} DEPARTURE : ${item.Departure} ITINERARY:${item.Itinerary}`);
  }

  onContextMenuAction2(item: element) {
    alert(`Click on Action 2 for ${item.airline}`);
  }
  clickedRows = new Set<element>();

}
export interface element {
  Departure: string;
  airline: string;
  Arrival: string;
  Itinerary: string;
}

const ELEMENT_DATA: element[] = [
  {airline: 'DL', Departure: 'SUN', Arrival:'SUN' , Itinerary: 'ATL DCA'},
  {airline: 'DL', Departure: 'SUN', Arrival:'SUN', Itinerary: 'ATL DCA'},
  {airline: 'DL', Departure: 'MON', Arrival:'MON', Itinerary: 'ATL DCA'},
  {airline: 'DL', Departure: 'TUE', Arrival: 'TUE', Itinerary: 'ATL DCA'},
  {airline: 'DL', Departure: 'WED', Arrival: 'WED', Itinerary: 'ATL DTW DCA'},

];

