import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'filterPipe'})
export class FilterPipe implements PipeTransform {
  transform(toDoList: any[], filterValue:string):any{
  if(filterValue===""){
    return toDoList
  }else{
    return toDoList.filter((toDo)=>{
      return toDo.name.toLowerCase().includes(filterValue.toLowerCase()) || toDo.description.toLowerCase().includes(filterValue.toLowerCase())
    })
  }
  }
}
