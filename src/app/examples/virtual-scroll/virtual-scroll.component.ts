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

  dataArray=[];
  cols=[
    {name:'id',width:200},
    {name:'randomNum_1',width:200},
    {name:'randomNum_2',width:200},
    {name:'randomNum_3',width:200}
  ];
}