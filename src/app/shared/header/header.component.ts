import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'jbc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() pageName: string = "JBC";
  @Input() back: boolean = false;

  constructor() { }

  ngOnInit() {}

}
