import { Component, OnInit,Input,Output,ViewChild,EventEmitter,ElementRef,Renderer2 } from '@angular/core';

@Component({
  selector: 'ngxdatagrid',
  templateUrl: './ngxdatagrid.component.html',
  styleUrls: ['./ngxdatagrid.component.css','ngxdatagridStyle.css']
})
export class NgxdatagridComponent implements OnInit {

  /* @Input('rows') rows:any; */
  @Input('rows')
  set rows(rows) {
    this._rows = rows;
  }
  @Input('columns') columns:any;
  @Input('gridHeight') gridHeight:any;
  @Input('gridWidth') gridWidth:any;
  @Input('headerRowHeight') headerRowHeight:any;
  @Input('rowHeight') rowHeight:number;
  @Input('selectionType') selectionType:string;
  @Input('draggableColumns') isDraggable:boolean=false;
  @Input('forceColumnWidth') forceColumnWidth:boolean;
  @Input('showToolbar') showToolbar:boolean=false;
  @Input('toolbarOptions') toolbarOptions={csvDelimiter:',',fileName:'gridData',searchPlaceholder:'Search'};
  @Input('loadType') loadType:string='virtualScroll';
  @Input('preSelectedRows') preSelectedRows = [];
  @Input('styles') styles={
    headerBgColor:'coral',
    toolbarBgColor:'coral',
    headerFontColor:'white',
    showInsideBorders:false,
    paginatorBgColor:'coral',
    paginatorFontColor:'white',
    showEvenOdd:false,
    toolsPanelHeight:150,
    showDownloads:true,
  };
  @Output()  selectedData: EventEmitter<any> = new EventEmitter();
  @ViewChild('normalCellTemplate') normalCellTemplate:any;
  @ViewChild('rowsContent') rowsContent:ElementRef;
  @ViewChild('toolkit') toolkit:ElementRef;
  columnWidth:any;
  isCheckboxable:boolean = false;
  rowsCopy=[];                                      // backup for sorting and search
  gridRows=[];                                      // this array is assigned to the grid for iteration of grid rows
  gridColumns=[];
  isAsc:boolean=false;       
  isSorted:boolean=false;  
  sortingProp:string;                  
  lastPropToSort:string;
  selectedRows:any=[];                              // selected rows from the grid will be stored in this array
  rowWidth:number;
  dragSourceColumnIndex:number;
  dropDestinationColumnIndex:number;
  countOfItemsScrolled:number=0;
  totalScrollHeight:number=0;
  countOfItemsInViewPort:number=0;
  viewPortItemStartIndex:number=0;
  viewPortItemEndIndex:number=0;
  lastScrollTop:number=0;
  lastSelectedIndex:number=0;
  editingPropnRow={};
  noOfPages:number=0;
  pageNumbers=[];
  visiblePageNumbers=[];
  paginationStart:number;
  paginationEnd:number;
  currentPage:number=1;
  _rows=[];
  searchQuery:string;
  constructor(private renderer:Renderer2) { }

  ngOnInit() {
    
//    this.gridColumns = JSON.parse(JSON.stringify(this.columns));
this.gridColumns = [...this.columns];
this.gridColumns.map(column=>{
  column.checked = true;
})
    //this.calculateColumns();
    this.changeColumnVisibility();
    /* this.gridColumns = JSON.parse(JSON.stringify(this.columns));
    if(this.isCheckboxable){
      this.columns = [firstColumn,...this.columns]; //adding the checkbox column for multiple selection
      this.columnWidth = ((this.gridWidth-this.columns.length-25)/(this.columns.length-1)); // assigning column width by excluding the checknox column
    }else{
      this.columnWidth = ((this.gridWidth-this.columns.length)/this.columns.length);
    }
    let leftToAdd:number=0; 
    this.columns.map((column,index)=>{
      if(column.name != 'checkboxColumn' && column.name != 'radioColumn'){
        if(!this.forceColumnWidth){
          column['width'] = this.columnWidth;
        }
        if(column.cellTemplate == undefined){        
          column['cellTemplate'] = this.normalCellTemplate;   // if no cell-template is defined, adding the default normal cell template
        }
        if(column.checked == undefined){
          //column.checked = true;
        }
      } 
      if(index == 0){
        column['left']=0;
        leftToAdd += Number(column['width']);
      }if(index != 0){
        column['left'] = leftToAdd+index-1;
        leftToAdd += Number(column['width']);
      }      
    })
    this.rowWidth = leftToAdd+this.columns.length; */

    this._rows.map((row,index)=>{
      row['top'] = (index * this.rowHeight);
      row['trackingIndex'] = index;
      row['checked'] = false;
    })
      this.rowsCopy = JSON.parse(JSON.stringify(this._rows));
      this.countOfItemsInViewPort = Math.floor((this.gridHeight-this.headerRowHeight)/this.rowHeight);
      this.totalScrollHeight = (this._rows.length * this.rowHeight);
      this.gridRows = this._rows.filter((row,index)=>{
        if(index>=0 && index<=this.countOfItemsInViewPort){
          return row;
        }
      })
      this.gridRows.map((row,index)=>{
        row['trackingIndex'] = index;
        row['checked'] = false;
      })
      this.viewPortItemEndIndex = this.countOfItemsInViewPort;
    
      this.noOfPages = Math.ceil(this._rows.length/this.countOfItemsInViewPort);
      for(let i=1;i<=this.noOfPages;i++){
        this.pageNumbers.push(i);
      }
      this.paginationStart = 0;
      this.paginationEnd = this.viewPortItemEndIndex;

      if(this.preSelectedRows.length){
          this.preSelectedRows.map(row=>{
            this.multiSelectRow({checked:true},row,row.trackingIndex,{shiftKey:false});
          })
      }
    }

    ngOnChanges(){
      if(this._rows.length > 0){
        this._rows.map((row,index)=>{
          row['top'] = (index * this.rowHeight);
          row['trackingIndex'] = index;
        })
      this.rowsCopy = [...this._rows];
      }
    if(this.countOfItemsInViewPort > 0){
        this.noOfPages = Math.ceil(this._rows.length/this.countOfItemsInViewPort);
        this.pageNumbers = [];
        for(let i=1;i<=this.noOfPages;i++){
          this.pageNumbers.push(i);
      } 
      this.currentPage = 1;
      this.getPageNumber(this.currentPage);
      }
      if(this.rowsContent !== undefined){
        this.rowsContent.nativeElement.scrollTop = 0;
      }
      this.searchQuery=null;
    }
    
    // convert column name to more readable form
    resolveName(prop){                               
      if(prop == 'checkboxColumn' || prop == 'radioColumn'){
        return ' ';
      }
      return prop.replace(/([A-Z])/g, ' $1').replace(/^./, function(str){ return str.toUpperCase(); })
    }


    multiSelectRow({checked},row,trackingIndex,{shiftKey}){
      if(!shiftKey){
        row.checked = checked;
        if(checked){   // if row is checked, push it into selected array
          this.selectedRows = [row,...this.selectedRows];
        }else{         // if row is unchecked, remove it from the selected array
          this.selectedRows = this.selectedRows.filter(row=>row.trackingIndex != trackingIndex);
        }
      }else{
        let start = Math.min(trackingIndex,this.lastSelectedIndex);
        let end = Math.max(this.lastSelectedIndex,trackingIndex);
        this._rows.map((row,index)=>{
          if(index >= start && index <= end){
            row.checked = checked;
            if(checked){  
              this.selectedRows = [row,...this.selectedRows];
            }else{
              this.selectedRows = this.selectedRows.filter(row=>row.trackingIndex != index);
            }
          }
        })
        this.selectedRows = this.selectedRows.filter((row, index, selfArray) =>
          index === selfArray.findIndex((item) => (
            item.trackingIndex === row.trackingIndex
          ))
        ) 
      }
      this.lastSelectedIndex = trackingIndex;
      this.selectedData.emit(this.selectedRows);
    }

    singleSelectRow({checked},row,trackingIndex){
      if(this.selectionType == 'single'){
        this.gridRows.map(row=>{
          if(row.trackingIndex == trackingIndex){
            this.selectedRows = row;
            row.checked = true;
          }else{
            row.checked = false;
          }
        })
        this.selectedData.emit(this.selectedRows);
      }
    }

      dragStart(event,columnIndex){
        event.stopPropagation();
        console.log("start",columnIndex);
        this.dragSourceColumnIndex = columnIndex;
      }
      
      allowDrop(event) {
        event.stopPropagation();   
        event.preventDefault();
      }
      
      drop(event,columnIndex) {
        event.stopPropagation();   
        event.preventDefault();  
        console.log("drop",columnIndex);
        this.dropDestinationColumnIndex=columnIndex;
        let item1 = this.columns[this.dragSourceColumnIndex];
        let item2 = this.columns[this.dropDestinationColumnIndex];
        this.columns[this.dropDestinationColumnIndex] = item1;
        this.columns[this.dragSourceColumnIndex] = item2;
        this.columns=[...this.columns];
      }

      changeInView(event){
        this.countOfItemsScrolled = Math.ceil(event/this.rowHeight);
        this.viewPortItemStartIndex = this.countOfItemsScrolled;
        this.viewPortItemEndIndex = this.viewPortItemStartIndex + this.countOfItemsInViewPort;
        if(this.lastScrollTop != this.viewPortItemStartIndex){
        let itemsToReturn = this._rows.filter((row,index)=>{
          if((index>=this.viewPortItemStartIndex-1) && (index<=this.viewPortItemEndIndex)){ 
            return row;
          }
        })
        this.gridRows = [...itemsToReturn];    
        }
        this.lastScrollTop = this.viewPortItemStartIndex;
      }
      
      mergeSort(arrayToSort,prop){
        if (arrayToSort.length < 2)
          return arrayToSort;
        let middle:number = parseInt((arrayToSort.length/2).toString());
        let leftItems   = arrayToSort.slice(0, middle);
        let rightItems  = arrayToSort.slice(middle, arrayToSort.length);
        return this.merge(this.mergeSort(leftItems,prop),this.mergeSort(rightItems,prop),prop);
      }
      
      merge(left, right,prop){
        let mergedResult = [];
        while (left.length && right.length) {
          if (left[0][prop] <= right[0][prop]) {
            mergedResult = [...mergedResult,left.shift()];
          }else{
            mergedResult = [...mergedResult,right.shift()];
          }
        }
        while (left.length){
          mergedResult = [...mergedResult,left.shift()];
        }   
        while (right.length){
          mergedResult = [...mergedResult,right.shift()];
        }
        return mergedResult;
    }

      callSort(prop){
        if(this.lastPropToSort != prop){      // if property to sort is not same as the last sorted property, get a copy and sort
          this._rows = [...this.rowsCopy];
          let x = this.mergeSort(this._rows,prop);
          this._rows = x;
        }else{
          this._rows.reverse();         // if property to sort is same as last sorted property, just reverse the array
        }
        this.lastPropToSort = prop;
        this.isAsc = !this.isAsc;
        this._rows.map((row,index)=>{
          row['top'] = (index * this.rowHeight);
          row['trackingIndex'] = index;
        })
        let itemsToReturn = this._rows.filter((row,index)=>{
          if((index>=this.viewPortItemStartIndex-1) && (index<=this.viewPortItemEndIndex)){ 
            return row;
          }
        })
        this.gridRows = [...itemsToReturn];   
        this.isSorted = true;
        this.sortingProp = prop;
        this.currentPage = 1;
        this.paginationStart = 0;
        this.paginationEnd = this.viewPortItemEndIndex;
      }
      
      headerCheckboxChecked({checked}){
        if(checked){    // if row is checked, push it into selected array
          this._rows.map(row=>row.checked = true);
          this.selectedRows = this._rows;
        }else{          // if row is unchecked, remove it from the selected array
          this._rows.map(row=>row.checked = false);
          this.selectedRows = [];
        }
        this.lastSelectedIndex = 0;
        this.selectedData.emit(this.selectedRows);
      }

      searchGrid(query){
        if(!query){
          this._rows = [...this.rowsCopy];
        }else{
          query = query.toString().toLowerCase();
            let arrayToReturn =   this.rowsCopy.filter(row=>{
            let columns = Object.keys(row);
                return (columns.map(column=>{
                    if(column != 'checked' && column != 'top' && column != 'trackingIndex') 
                      return row[column]
                }).toString().toLowerCase().indexOf(query)) > -1;
          })
          this._rows = arrayToReturn;
        }
        this.countOfItemsInViewPort = Math.ceil((this.gridHeight-this.headerRowHeight)/this.rowHeight);
        this.totalScrollHeight = (this._rows.length * this.rowHeight);
        this._rows.map((row,index)=>{
          row['top'] = (index * this.rowHeight);
          row['trackingIndex'] = index;
          row['checked'] = false;
        })
        this.gridRows = this._rows.filter((row,index)=>{
          if(index>=0 && index<=this.countOfItemsInViewPort+1){
            return row;
          }
        })
        if(this.countOfItemsInViewPort > 0){
          this.noOfPages = Math.ceil(this._rows.length/this.countOfItemsInViewPort);
          this.pageNumbers = [];
        for(let i=1;i<=this.noOfPages;i++){
          this.pageNumbers.push(i);
        } 
        this.currentPage = 1;
        this.getPageNumber(this.currentPage);
      }
      if(this.rowsContent != undefined){
        this.rowsContent.nativeElement.scrollTop = 0;
      }
      }

    downloadFile(fileName='gridData',delimiter=','){
      let headers = Object.keys(this._rows[0]);
      headers = headers.filter(header=>{
        if(header != 'top' && header != 'trackingIndex' && header != 'checked'){
          return header;
        }
      })
      let content:string='';
      let headerLength = headers.length;
      headers.map((header,headerIndex)=>{
        if(headerIndex == 0){
          content = content + this.modifyHeaderName(header); // skipping the delimiter before first header
        }else{
          content = content + delimiter + this.modifyHeaderName(header);
        }
      })
      content = content + '\r\n';                           // appending new line after the header row
      this._rows.map((row,rowIndex)=>{
        headers.map((header,headerIndex)=>{
          if(row[header] == null || undefined){
            row[header] = '';                              // replacing all the null and undefined values because
          }                                                //(we dont want null or undefined to be printed in the downloaded file)
          if(headerIndex == 0){
            content = content + row[header];
          }else{
            content = content + delimiter + row[header];
          }
        })
        content = content + '\r\n';
      })
      let downloadLink = document.createElement("a");    
      let blob = new Blob([content],{type : "text/plain"});
      let url = URL.createObjectURL(blob);
      downloadLink.href = url;
      downloadLink.download = fileName + '.csv';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }

    modifyHeaderName(header:string){
      return header.replace(/([A-Z])/g, ' $1').split(' ').join('_').toUpperCase();
    }

    excelDownload(fileName='gridData') {
      let table = document.createElement('table');
      let div = document.getElementById('tableToExport');
      div.appendChild(table);
      let cols = this.columns.filter(column=>{
        if(column.name != 'checkboxColumn' && column.name != 'radioColumn'){
          return column.name;
        }
      })
      let _row = table.insertRow(0);
      cols.map((column,columnIndex)=>{
        let row_cell = _row.insertCell(columnIndex);
        row_cell.innerHTML = this.modifyHeaderName(column.name);
      })
      this._rows.map((row,rowIndex)=>{
        let _row = table.insertRow(rowIndex+1);
        cols.map((column,columnIndex)=>{
          let row_cell = _row.insertCell(columnIndex);
          row_cell.innerHTML = row[column.name];
        })
      })

      
      let dataType = 'application/vnd.ms-excel';
      let tableSelect = document.getElementById('tableToExport').innerHTML;
      let filename = fileName+'.xls';
      let downloadLink = document.createElement("a");
      document.body.appendChild(downloadLink);
      if(navigator.msSaveOrOpenBlob){
          var blob = new Blob(['\ufeff', tableSelect], {
              type: dataType
          });
          navigator.msSaveOrOpenBlob( blob, filename);
      }else{
          downloadLink.href = 'data:' + dataType + ', ' + tableSelect;
          downloadLink.download = filename;
          downloadLink.click();
      }
  }

    editPropnRow(rowIndex,column,value){
      this.gridRows[rowIndex][column] = value;
      this.editingPropnRow[rowIndex+'_'+column]=false;
    }

    getPageNumber(pageNumber:number){
      let startIndex = this.countOfItemsInViewPort*(pageNumber-1);
      let endIndex = startIndex + this.countOfItemsInViewPort;
      this.paginationStart = startIndex;
      if(endIndex > this._rows.length){
        this.paginationEnd = this._rows.length;
      }else{
        this.paginationEnd = endIndex;
      }
      
    
      let newArray = this._rows.filter((row,index)=>{
        if((index >= startIndex) && (index <= endIndex)){
          return row;
        } 
      })
      this.gridRows = newArray;
      this.gridRows.map((row,index) => {
        row['top'] = (index * this.rowHeight);
      });
      this.currentPage = pageNumber;
    }

    incrementPage() {
      if(this.currentPage != this.noOfPages) {
        this.currentPage++;
        this.getPageNumber(this.currentPage);
      }
    }

    decrementPage() {

      if(this.currentPage != 1) {
        this.currentPage--;
        this.getPageNumber(this.currentPage);
      }
    }

    changePage(e) {
      this.currentPage = Number(e);
      this.getPageNumber(this.currentPage);
    }

    changeColumnVisibility() {
      this.columns = this.gridColumns.filter(column => {
        if(column.checked || column.checked == undefined) {
          return column;
        }
      });
      this.calculateColumns();
    }

    calculateColumns() {
      let firstColumn = {};
      if(this.selectionType == 'multiple') {
        this.isCheckboxable = true;
        firstColumn = {name:'checkboxColumn',width:'25'};
      } else if(this.selectionType == 'single') {
        this.isCheckboxable = true;
        firstColumn = {name:'radioColumn',width:'25'};
      }
      if(this.isCheckboxable) {
        this.columns = [firstColumn,...this.columns]; // adding the checkbox column for multiple selection
        this.columnWidth = ((this.gridWidth-this.columns.length-25)/(this.columns.length-1)); // assigning column width by excluding the checknox column
      } else {
        this.columnWidth = ((this.gridWidth-this.columns.length)/this.columns.length);
      }
      let leftToAdd = 0;
      this.columns.map((column,index)=> {
        if(column.name != 'checkboxColumn' && column.name != 'radioColumn'){
          if(!this.forceColumnWidth) {
            column['width'] = this.columnWidth;
          }
          if(column.cellTemplate == undefined) {
            column['cellTemplate'] = this.normalCellTemplate;   // if no cell-template is defined, adding the default normal cell template
          }
          if(column.checked == undefined) {
            // column.checked = true;
          }
        }
        if(index == 0) {
          column['left']=0;
          leftToAdd += Number(column['width']);
        }if(index != 0) {
          column['left'] = leftToAdd+index-1;
          leftToAdd += Number(column['width']);
        }
      })
      this.rowWidth = leftToAdd+this.columns.length;
    }

    showtoolkit:boolean=false;
    gridviewOpacity:number;
    toggletoolkit() {
      this.showtoolkit = !this.showtoolkit;
      if(this.showtoolkit) {
        this.gridviewOpacity = 0.3;
      } else {
        this.gridviewOpacity = 1;

      }
    }
}
