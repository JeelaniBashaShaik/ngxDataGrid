import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  constructor() { }
  
    ngOnInit() {
      this.generateData();
    }
    
    loadType:string='pagination';
    randomCount:number=100;
    dataArray=[];
    cols=[
      {name:'id'},
      {name:'randomNum_1'},
      {name:'randomNum_2'},
      {name:'randomNum_3'}
    ];

    changeLoadType(value){
      this.loadType = value;
      this.changeCount(this.randomCount);
    }

    changeCount(e){
      this.randomCount = e;
      this.generateData();
    }

    generateData(){
      this.dataArray = [];
      for(let i=1;i<=this.randomCount;i++){
        let obj = {id:i,randomNum_1:Math.floor((Math.random() * this.randomCount) + 1),randomNum_2:Math.floor((Math.random() * this.randomCount) + 1),randomNum_3:Math.floor((Math.random() * this.randomCount) + 1)};
        this.dataArray = [...this.dataArray,obj];
      }
    }
}
