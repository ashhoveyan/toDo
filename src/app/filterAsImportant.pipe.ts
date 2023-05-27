import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'filterAsImportantPipe'})
export class FilterAsImportantPipe implements PipeTransform {
  transform(toDoList: any[], important: boolean, finished: boolean): any {
    console.log(important)
    console.log(finished)
    if (!(important || finished)) {
      return toDoList
    } else if (important && finished) {
      return toDoList.filter((todo) => todo.finished && todo.bool)

    } else if (finished) {
      return toDoList.filter((todo) => {
        return todo.finished
      })
    } else return toDoList.filter((todo) => {
      return todo.bool
    })


  }

}
