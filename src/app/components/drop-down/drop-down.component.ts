import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-drop-down',
  standalone: true,
  imports: [],
  templateUrl: './drop-down.component.html',
  host: {
    'class': 'w-[120px] h-[40px] flex items-center rounded-md border-[2px] border-lightGray border-solid relative'
  }
})
export class DropDownComponent implements OnInit {
  @Input({ required: true }) filters: string[] = [];
  @Input() defaultFilterIndex: number = 0;

  @Output() changeActualFilter = new EventEmitter<string>();

  actualFilter = '';
  showDrop: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.actualFilter = this.filters[this.defaultFilterIndex];
  }

  changeFilter(ev: string) {
    this.actualFilter = ev;
    this.changeActualFilter.emit(ev);
    this.showDrop = !this.showDrop;
  }

}
