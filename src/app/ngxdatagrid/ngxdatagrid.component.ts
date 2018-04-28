import { Component, OnInit,Input,Output,ViewChild,EventEmitter } from '@angular/core';


@Component({
  selector: 'ngxdatagrid',
  templateUrl: './ngxdatagrid.component.html',
  styleUrls: ['./ngxdatagrid.component.css']
})
export class NgxdatagridComponent implements OnInit {

  @Input('rows') rows:any;
  @Input('columns') columns:any;
  @Input('gridHeight') gridHeight:any;
  @Input('gridWidth') gridWidth:any;
  @Input('headerRowHeight') headerRowHeight:any;
  @Input('selectionType') selectionType:string;
  @Input('draggableColumns') isDraggable:boolean=false;
  @Output()  selectedData: EventEmitter<any> = new EventEmitter();
  @ViewChild('normalCellTemplate') normalCellTemplate:any;
  
  columnWidth:any;
  isCheckboxable:boolean = false;
  rowsCopy=[];                                      // backup for sorting and search
  gridRows=[];                                      // this array is assigned to the grid for iteration of grid rows
  gridColumns=[];
  isAsc:boolean=false;                           
  lastPropToSort:string;
  selectedRows:any=[];                              // selected rows from the grid will be stored in this array
  headerRowWidth:number;
  dragSourceColumnIndex:number;
  dropDestinationColumnIndex:number;

  constructor() { }

  ngOnInit() {
    if(this.selectionType == 'multiple'){
      this.isCheckboxable = true;                   // this adds an extra column with checkbox for every row
    }else if(this.selectionType == 'single'){
      this.isCheckboxable = false;                  
    }
    this.headerRowWidth = this.gridWidth;  
    if(this.isCheckboxable){
      this.columns = [{name:'checkboxColumn',width:'25'},...this.columns]; //adding the checkbox column for multiple selection
      this.columnWidth = ((this.gridWidth-this.columns.length-25)/(this.columns.length-1)); // assigning column width by excluding the checknox column
    }else{
      this.columnWidth = ((this.gridWidth-this.columns.length)/this.columns.length);
    }
    this.columns.map(column=>{
      if(column.name != 'checkboxColumn'){
        column['width'] = this.columnWidth;
        if(column.cellTemplate == undefined){        
          column['cellTemplate'] = this.normalCellTemplate;   // if no cell-template is defined, adding the default normal cell template
        }
      } 
    })
   this.rowsCopy = [...this.rows];
   this.gridRows = [...this.rows];
   this.gridRows.map((row,index)=>{
     row['trackingIndex'] = index;       // adding an index for each row on the grid
     row['checked'] = false;
   })
   //this.isDraggable = true;
  }


  sort(prop){    
    if(this.lastPropToSort != prop){      // if property to sort is not same as the last sorted property, get a copy and sort
      this.rows = [...this.rowsCopy];
      this.rows.sort(function(a, b){
        let item1=a[prop], item2=b[prop]
        if (item1 < item2)
            {return -1 }
        if (item1 > item2)
            {return 1}
        
        return 0 
    })
    }else{
      this.rows.reverse();         // if property to sort is same as last sorted property, just reverse the array
    }
    this.lastPropToSort = prop;
    this.isAsc = !this.isAsc;
  }
  
  
  // convert column name to more readable form
  resolveName(prop){                               
    if(prop == 'checkboxColumn'){
      return ' ';
    }
    return prop.replace(/([A-Z])/g, ' $1').replace(/^./, function(str){ return str.toUpperCase(); })
  }


  selectRow({checked},row,trackingIndex){
    if(checked){   // if row is checked, push it into selected array
      this.selectedRows = [row,...this.selectedRows];
    }else{         // if row is unchecked, remove it from the selected array
      this.selectedRows = this.selectedRows.filter(row=>row.trackingIndex != trackingIndex);
    }
    this.selectedData.emit(this.selectedRows);
  }

    dragStart(event,columnIndex){
      event.stopPropagation(); 
      this.dragSourceColumnIndex = columnIndex;
    }
    
    allowDrop(event) {
        event.preventDefault();
        event.stopPropagation();  
    }
    
    drop(event,columnIndex) {
        event.preventDefault();
        event.stopPropagation();  
        this.dropDestinationColumnIndex=columnIndex;
        let item1 = this.columns[this.dragSourceColumnIndex];
        let item2 = this.columns[this.dropDestinationColumnIndex];
        this.columns[this.dropDestinationColumnIndex] = item1;
        this.columns[this.dragSourceColumnIndex] = item2;
        this.columns=[...this.columns];
    }

}
