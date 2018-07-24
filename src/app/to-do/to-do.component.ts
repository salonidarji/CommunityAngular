import { Component, OnInit } from '@angular/core';
import { ToDo  } from "./toDo";
@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDOComponent implements OnInit {

  str:string="";
  id:number=4;
  todo:ToDo[]=[
    // tslint:disable-next-line:whitespace
    new ToDo(1,"Saloni"),
    new ToDo(2,"Vrushti"),
    new ToDo(3,"Ruju")
  ];
  constructor() { }

  ngOnInit() {
  }

  addToDo(str){
    this.id++;
    this.todo.push(new ToDo(this.id,this.str));
    this.str = '';
  }

  onDelete(item) {
    this.todo.splice(this.todo.indexOf(item), 1);
  }
}
