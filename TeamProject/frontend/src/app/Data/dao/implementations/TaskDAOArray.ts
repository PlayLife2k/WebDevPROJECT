import {TaskDAO} from '../interface/TaskDAO';
import {Category} from '../../../model/Category';
import {Observable, of} from 'rxjs';
import {Priority} from '../../../model/Priority';
import {Task} from 'src/app/model/Task';
import {TestData} from '../../TestData';
import {HttpClient, HttpHeaders} from '@angular/common/http';

export class TaskDAOArray implements TaskDAO {
  url = 'http://localhost:8000/app/task/';

  public httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  add(task: Task): Observable<Task> {
    console.log(task);
    return this.http.post<Task>(this.url, task, this.httpOptions);
  }

  getAll(): Observable<Task[]> {
    return this.http.get<Task[]>(this.url);
  }

  get(id: number): Observable<Task> {
    const newUrl = `http://localhost:8000/app/task/${id}`;
    return this.http.get<Task>(newUrl);
  }

  delete(id: number): Observable<Task> {
    const newUrl = `${this.url}${id}`;
    return this.http.delete<Task>(newUrl, this.httpOptions);
  }

  getCompletedCountInCategory(category: Category): Observable<number> {
    return undefined;
  }

  getTotalCount(): Observable<number> {
    return of();
  }

  getTotalCountInCategory(category: Category): Observable<number> {
    return undefined;
  }

  getUncompletedCountInCategory(category: Category): Observable<number> {
    return undefined;
  }

  search(category: Category, searchText: string, status: boolean, priority: Priority): Observable<Task[]> {
    return this.searchTasks(category, searchText, status, priority);
  }

  private searchTasks(category: Category, searchText: string, status: boolean, priority: Priority): Observable<Task[]> {
    const newurl = 'http://localhost:8000/app/task/?';
    let filter = '';
    console.log(category);

    // поочереди применяем все условия
    if (status != null) {
      if (filter.length === 0) {
        filter += `completed=${status}`;
      }
    }
    if (priority != null) {
      if (filter.length !== 0){
        filter += '&';
      }
      filter += `priority=${priority.id}`;
    }

    if (category != null) {
      if (filter.length !== 0){
        filter += '&';
      }
      filter += `category=${category.id}`;
    }

    if (searchText != null || searchText !== '') {
      if (filter.length !== 0){
        filter += '&';
      }
      filter += `title=${searchText}`;
    }

    return this.http.get<Task[]>(newurl + filter);
  }

  update(task: Task): Observable<Task> {
    const newUrl = `${this.url}${task.id}`;
    return this.http.put<Task>(newUrl, task, this.httpOptions);
  }

}
