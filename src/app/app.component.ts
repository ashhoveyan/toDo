import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {RequestService} from "../request.service";
import {environment} from "../environments/environment.prod";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  id: number = 1
  bool = false
  toDoList!: any[]
  form!: FormGroup
  type: string = "create"
  important: boolean = false
  finished: boolean = false

  constructor(private fb: FormBuilder, private requestService: RequestService) {
    this.form = fb.group({
      name: new FormControl(""),
      description: new FormControl(""),
    });
  }

  ngOnInit() {
    this.getToDoList()
  }

  getToDoList() {
    this.requestService.getData(`${environment.url}${environment.toDo.get}`).subscribe((items: any) => {
      this.toDoList = items
    })
  }

  showEditToDo(item: any) {
    this.bool = true
    this.form.patchValue({
      name: item['name'],
      description: item['description'],
    })
    this.type = item.id
  }

  openNewToDoForm() {
    this.bool = true
    this.form.reset()
    this.type = "create"
  }

  saveChange() {
    if (this.type == "create") {
      this.createItem(this.form.value)
    } else {
      this.editItem(this.form.value)
    }
  }

  editItem(value: any) {
    this.requestService.edit(`${environment.url}/toDo/${this.type}`, value).subscribe(() => {
      this.getToDoList()
      this.bool = false
    })
  }

  createItem(value: any) {
    this.requestService.create(`${environment.url}/toDo`, value).subscribe(() => {
      this.getToDoList()
      this.bool = false
    })
  }

  deleteItem(id: string) {
    this.requestService.delete(`${environment.url}/toDo/${id}`).subscribe(() => {
      this.getToDoList()
    })
  }

  closeWrapper() {
    this.bool = false
  }

  reset() {
    this.form.reset()
  }

  markAsImportant(el: any, todo: any) {
    el.classList.toggle("asImportant");
    todo.bool = true
    console.log(todo)

  }

  markAsFinished(el:any, todo:any) {
    el.classList.add("disabled")
    todo.finished=true
    console.log(todo)
  }

  filterImportant() {

    this.important = !this.important;
    console.log(this.important)
    return this.important
  }

  filterFinished(){

    if (this.finished) {
      return this.finished = !this.finished;
    } else {
      return this.finished = !this.finished;
    }
  }

}
