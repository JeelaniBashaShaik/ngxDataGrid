import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-virtual-scroll',
  templateUrl: './virtual-scroll.component.html',
  styleUrls: ['./virtual-scroll.component.css']
})
export class VirtualScrollComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    for(let i=1;i<=10000;i++){
      let obj = {id:i,randomNum_1:Math.floor((Math.random() * 10000) + 1),randomNum_2:Math.floor((Math.random() * 10000) + 1),randomNum_3:Math.floor((Math.random() * 10000) + 1)};
      this.dataArray = [...this.dataArray,obj];
    }
  }
  toolbarOptions={searchPlaceholder:'abc...',csvDelimiter:'|',fileName:'123'};

  dataArray=[];
  cols=[
    {name:'id'},
    {name:'randomNum_1'},
    {name:'randomNum_2'},
    {name:'randomNum_3'}
  ];
}
