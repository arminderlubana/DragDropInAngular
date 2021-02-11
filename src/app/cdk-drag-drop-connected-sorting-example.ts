import {Component, ElementRef, Renderer2} from '@angular/core';
import {CdkDragDrop,   CdkDragEnd,  CdkDragStart} from '@angular/cdk/drag-drop';
/**
 * @title Drag&Drop connected sorting
 */
@Component({
  selector: 'cdk-drag-drop-connected-sorting-example',
  templateUrl: 'cdk-drag-drop-connected-sorting-example.html',
  styleUrls: ['cdk-drag-drop-connected-sorting-example.css'],
})
export class CdkDragDropConnectedSortingExample {
  constructor(private el: ElementRef, private renderer: Renderer2) { }
  isOpen = false;
  dragPosition = {x: 0, y: 0};
  state = '';
  position = '';
  todo = [
    '1',
    '2',
    '3',
    '4'
  ];

    done : string[]= ['5','6'];
dropList:dropObject[]=[];

// entered(event: CdkDragEnter<string[]>) {
//   console.log('Entered', event.item.data);
// }

//   changePosition() {
//     this.dragPosition = {x: this.dragPosition.x + 50, y: this.dragPosition.y + 50};
//   }
//   setPosition(x: number, y: number) {
//     this.dragPosition = {x:  x, y:  y};
//   }
  // getPosition(el) {
  //   let x = 0;
  //   let y = 0;
  //   while(el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
  //     x += el.offsetLeft - el.scrollLeft;
  //     y += el.offsetTop - el.scrollTop;
  //     el = el.offsetParent;
  //   }
  //   return { top: y, left: x };
  // }
  dragStarted(event: CdkDragStart) {
    // console.log('drag start');
    // console.log(event);
    // this.state = 'dragStarted';
    // var  obj = { text: '1'};
  //   var o= new dropObject()> {
  //   text:'1',
  //   x:5,
  //   y: 6
  // };
  //this.dropList.push( new{text:'1',  x:5,  y: 6});
   // this.done.push(obj);
   //this.dx =  event.source.element.nativeElement.offsetLeft;
   //this.dy = event.y - this.el.nativeElement.offsetTop;
    //const tempTodo = event.source.dropContainer.element;
   // console.log(event.source.dropContainer.element);
    //this.renderer.createElementsetElementStyle(this.el.nativeElement, 'top', (y - this.dy) + 'px');
//const indexValue = this.done.indexOf(event.source.dropContainer.element.nativeElement);
//const movableValue = tempTodo.splice(indexValue,1).join();
//event.source.dropContainer.data.splice(indexValue, 0, movableValue);
// copyArrayItem(
//   event.source.data,
//   event.source.data,
//   0,
//   0
// );
  }
 
  dragEnded(event: CdkDragEnd) {
    // this.state = 'dragEnded';
    // console.log('End')
    let offset = { ...(<any>event.source._dragRef)._lastKnownPointerPosition };
    let text=event.source.getRootElement().innerText;
    let xAxes=offset.x-40;
    let yAxes=offset.y-8;
    this.dropList.push({ text: text, x: xAxes, y:yAxes})
    //this.position.x = this.initialPosition.x + offset..x;
    //this.position.y = this.initialPosition.y + offset.y;

    //console.log(offset);
    //let left=event.source.getRootElement().offsetLeft - event.source.getRootElement().scrollLeft;
    //////let top=event.source.getRootElement().offsetTop - event.source.getRootElement().scrollLeft;
     //console.log('x: ' + left, 'y: ' + top);        
     //console.log(event.source.getRootElement().offsetLeft)
     //console.log(event.source.getRootElement().offsetTop)
     
    //let element = event.source.getRootElement();
    //let parentPosition = this.getPosition(element);
    // let boundingClientRect = element.getBoundingClientRect();
    // console.log('x: ' + (boundingClientRect.x - parentPosition.left), 'y: ' + (boundingClientRect.y - parentPosition.top));        
  }
  // dragEnded1(event: CdkDragEnd) {

  //   // console.log('Element was dragged', event.x);
  //   // console.log('Element was dragged', event.y);
  //   this.top = event.y- 50;
  //   this.left = event.x;
  // }
  // dragMoved(event: CdkDragMove) {
  //   this.position = `> Position X: ${event.pointerPosition.x} - Y: ${event.pointerPosition.y}`;
  // }
  drop(event: CdkDragDrop<string[]>) {
    // console.log('drop' );
    // this.done.push('4');
    // this.isOpen ? "Close" : "Open"
    
    
    // console.log(event.distance.x)
    // console.log(event.distance.y)
    // let left=event.item.getRootElement().offsetLeft - event.item.getRootElement().scrollLeft;
    // let top=event.item.getRootElement().offsetTop - event.item.getRootElement().scrollLeft;
    //  console.log('x: ' + left, 'y: ' + top);        
    //  console.log(event.item.getRootElement().offsetLeft)
    //  console.log(event.item.getRootElement().offsetTop)
    //  this.dropList.push({ text: '9', x:left,  y: top})
    // console.log(this.getPosition(element));
    // let parentPosition = this.getPosition(element);
    // let boundingClientRect = element.getBoundingClientRect();
    // console.log('x: ' + (boundingClientRect.x - parentPosition.left), 'y: ' + (boundingClientRect.y - parentPosition.top));        
    //if (event.previousContainer === event.container) {
     // console.log('event fired');
     // console.log(event.item);
      //console.log(event);
      
      //moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    // } else {
    //   //console.log('event fired else');
    //   copyArrayItem(
    //     event.previousContainer.data,
    //     event.container.data,
    //     event.previousIndex,
    //     event.currentIndex
    //   );
     // console.log(event.item);
      //console.log(event.distance);
      //this.setPosition(event.distance.x,event.distance.y);
      // transferArrayItem(event.previousContainer.data,
      //                   event.container.data,
      //                   event.previousIndex,
      //                   event.currentIndex);
    //}
    
  }
//   dragEnd($event: CdkDragEnd) {
//     console.log('dragEnd');
//     console.log($event.source.getFreeDragPosition());
// }

// dragEnter($event: CdkDragEnter) {
//   console.log('dragEnter');
//   console.log($event.container.element);
// }
}

 class dropObject{
  text:string
    x: number
  y:number
  constructor(text: string,x:number,y: number) {
    this.text = text;
    this.x = x;
    this.y=y
}
}

/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */