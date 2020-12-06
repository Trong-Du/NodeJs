import { Component, OnInit, Output, EventEmitter } from '@angular/core';
//truyền dữ liệu từ child => parent: load Output, EventEmitter
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  // Goi ra su dung
  @Output() acceptData: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
    this.acceptData.emit("hello");
  }

}
